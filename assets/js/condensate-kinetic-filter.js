(function () {
  "use strict";
  var root = document.getElementById("tkf-lab");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";
  var $ = function (selector) { return root.querySelector(selector); };
  var $$ = function (selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); };
  var defaults = { amplitude:70, duration:35, assembly:30, reset:35, threshold:45, pattern:"brief", lifetime:60, density:65, exchange:70 };
  var state = Object.assign({}, defaults);
  function clamp(x,a,b) { return Math.max(a,Math.min(b,x)); }
  function setText(selector,value) { var el=$(selector); if(el) el.textContent=value; }
  function pathFrom(values,top,bottom,left,right) {
    var parts=[];
    values.forEach(function(v,i){var x=left+i/Math.max(1,values.length-1)*(right-left);var y=bottom-clamp(v,0,1)*(bottom-top);parts.push((i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1));});
    return parts.join(" ");
  }
  function inputAt(t,s) {
    var end=0.12+(s.duration/100)*0.65;
    if(s.pattern==="brief") return t>=0.12&&t<=Math.min(0.9,end)?s.amplitude/100:0;
    if(s.pattern==="sustained") return t>=0.12&&t<=0.93?s.amplitude/100:0;
    if(s.pattern==="repeated") {
      var width=0.055+(s.duration/100)*0.11;
      return [0.12,0.32,0.52,0.72].some(function(start){return t>=start&&t<=start+width;})?s.amplitude/100:0;
    }
    var phase=(t-0.1)*22*Math.PI;
    return t>=0.1&&t<=0.92&&Math.sin(phase)>0?s.amplitude/100:0;
  }
  function simulate(s) {
    var n=100, input=[],cond=[],out=[],occupancy=0,transcript=0;
    var assemblyRate=0.045+(1-s.assembly/100)*0.32;
    var resetRate=0.025+(1-s.reset/100)*0.24;
    var threshold=s.threshold/100;
    for(var i=0;i<n;i+=1){
      var t=i/(n-1),v=inputAt(t,s);
      input.push(v);
      var target=(v>=threshold)?clamp((v-threshold)/Math.max(.08,1-threshold)+.48,0,1):0;
      if(target>occupancy) occupancy+=(target-occupancy)*assemblyRate;
      else occupancy+=(target-occupancy)*resetRate;
      occupancy=clamp(occupancy,0,1);
      var targetOutput=occupancy*(0.35+0.65*(s.density||65)/100);
      transcript+=(targetOutput-transcript)*(targetOutput>transcript?0.22:0.11);
      cond.push(occupancy);out.push(clamp(transcript,0,1));
    }
    return {input:input,condensate:cond,output:out};
  }
  function renderSimulation() {
    ["amplitude","duration","assembly","reset","threshold"].forEach(function(k){state[k]=+$("#tkf-"+k).value;setText("#tkf-"+k+"-value",state[k]+"%");});
    var d=simulate(state);
    $("#tkf-input-line").setAttribute("d",pathFrom(d.input,30,238,52,580));
    $("#tkf-condensate-line").setAttribute("d",pathFrom(d.condensate,30,238,52,580));
    $("#tkf-transcription-line").setAttribute("d",pathFrom(d.output,30,238,52,580));
    var peakAssembly=Math.round(Math.max.apply(null,d.condensate)*100);
    var peakOutput=Math.round(Math.max.apply(null,d.output)*100);
    var residual=Math.round(d.condensate[d.condensate.length-1]*100);
    setText("#tkf-peak-assembly",peakAssembly+"%");
    setText("#tkf-peak-output",peakOutput+"%");
    setText("#tkf-residual",residual+"%");
    var status=$(".tkf-status-row");
    var subcritical=peakAssembly<20;
    var persistent=residual>=30;
    status.classList.toggle("is-subcritical",subcritical);
    status.classList.toggle("is-persistent",!subcritical&&persistent);
    setText("#tkf-status",subcritical?"Subthreshold / weak assembly":persistent?"Persistent assembly pattern":"Assembly-favored regime");
    if(subcritical) setText("#tkf-insight","The selected input does not sustain assembly above the chosen threshold in this model. Increase pulse duration or amplitude to explore threshold crossing.");
    else if(persistent) setText("#tkf-insight","Assembly remains after the input falls. A longer reset time carries more history forward and may merge responses to later pulses.");
    else if(state.pattern==="rapid") setText("#tkf-insight","Rapid inputs reach the assembly machinery intermittently. Compare their output with a sustained input at the same amplitude.");
    else if(state.pattern==="repeated") setText("#tkf-insight","Repeated inputs can accumulate when a new pulse arrives before assembly has fully reset. Increase reset time to explore this effect.");
    else setText("#tkf-insight","Assembly and transcription lag behind the input. Adjust the assembly threshold and reset time to compare transient activation with a retained response.");
  }
  $$(".tkf-presets").forEach(function(){});
  $$(".tkf-preset").forEach(function(b){b.addEventListener("click",function(){state.pattern=b.dataset.pattern;$$(".tkf-preset").forEach(function(x){x.classList.toggle("is-active",x===b);});renderSimulation();});});
  $$("#tkf-simulator input[type=range]").forEach(function(el){el.addEventListener("input",renderSimulation);});
  $("#tkf-reset-button").addEventListener("click",function(){
    state=Object.assign({},defaults);
    ["amplitude","duration","assembly","reset","threshold"].forEach(function(k){$("#tkf-"+k).value=defaults[k];});
    $$(".tkf-preset").forEach(function(b){b.classList.toggle("is-active",b.dataset.pattern===defaults.pattern);});
    renderSimulation();
  });

  var filterData={
    threshold:["τ","DURATION GATING","Inputs must last long enough to assemble","Threshold-dependent nucleation introduces a delay. A brief signal may end before a stable assembly forms, while a sustained input can cross the threshold.","A duration-response curve with a transition in condensate formation probability.","Cooperative transcription-factor binding or promoter-state switching can also create thresholds and delays."],
    lowpass:["∿","LOW-PASS FILTERING","Fast fluctuations may be attenuated","If assembly and exchange are slower than the input fluctuations, condensate occupancy may follow the slower envelope rather than each pulse. The relevant timescales are system-specific.","Reduced transcriptional response as pulse frequency rises, while sustained inputs retain output.","Upstream pathway feedback or promoter-state kinetics can produce filtering without a condensate-specific mechanism."],
    memory:["↻","PERSISTENCE / MEMORY","Assembly may outlast the initiating signal","Multivalent interactions and slow reset can maintain a transient molecular state after input withdrawal. This may carry short-term history into the response to a later input.","Residual assembly or altered response to a second pulse after the first input ends.","Chromatin marks, protein turnover and transcription-factor residence time can also preserve regulatory history."],
    reset:["↓","REGULATED RESET","Dissolution may restore responsiveness","Dissolution and molecular exchange set how rapidly an assembly returns toward its pre-input state. If reset is slow, signals may overlap; if fast, separate pulses may be resolved.","A change in reset kinetics changes the interval required to distinguish successive responses.","Transcriptional shutdown can also arise from RNA feedback, Pol II pausing, or upstream signal termination."]
  };
  function showFilter(key){
    var d=filterData[key];if(!d)return;
    $$(".tkf-filter-card").forEach(function(b){b.classList.toggle("is-active",b.dataset.filter===key);});
    ["#tkf-filter-icon","#tkf-filter-label","#tkf-filter-title","#tkf-filter-copy","#tkf-filter-signature","#tkf-filter-alternative"].forEach(function(sel,i){setText(sel,d[i]);});
  }
  $$(".tkf-filter-card").forEach(function(b){b.addEventListener("click",function(){showFilter(b.dataset.filter);});});

  function renderBursts(){
    state.lifetime=+$("#tkf-lifetime").value;
    state.density=+$("#tkf-density").value;
    state.exchange=+$("#tkf-exchange").value;
    ["lifetime","density","exchange"].forEach(function(k){setText("#tkf-"+k+"-value",state[k]+"%");});
    var vals=[],n=112;
    var basePeriod=7+Math.round(state.lifetime/16);
    var width=2+Math.round(state.lifetime/22);
    var amp=0.22+0.72*state.density/100;
    var exchange=state.exchange/100;
    for(var i=0;i<n;i++){
      var pulse=(i%basePeriod)<width;
      var v=pulse?amp:0.012;
      if(!pulse&&state.lifetime>70&&i%basePeriod<basePeriod-width+2)v=0.07+state.lifetime/100*0.1;
      vals.push(clamp(v*(0.5+exchange*0.5),0,1));
    }
    $("#tkf-burst-line").setAttribute("d",pathFrom(vals,28,216,48,695));
    var freq=state.lifetime<35?"Higher":state.lifetime>75?"Lower":"Moderate";
    var dur=state.lifetime>70?"Longer":state.lifetime<30?"Shorter":"Moderate";
    var size=state.density>75?"Higher":state.density<35?"Lower":"Moderate";
    setText("#tkf-burst-frequency",freq);
    setText("#tkf-burst-duration",dur);
    setText("#tkf-burst-size",size);
    var note="Greater local enrichment raises the modelled output per burst. Longer lifetime can extend activity but may reduce reset or alter the number of separable bursts.";
    if(state.exchange<30)note="Restricted exchange produces a less responsive predicted output. Reduced mobility is not uniquely diagnostic of a particular material state.";
    else if(state.lifetime<30)note="Shorter assembly lifetime produces briefer episodes in this schematic output. Faster reset may keep responses more separable.";
    setText("#tkf-burst-insight",note);
  }
  $$("#tkf-lifetime,#tkf-density,#tkf-exchange").forEach(function(el){el.addEventListener("input",renderBursts);});

  var contextData={
    baseline:["✳","Dynamic assemblies can remain responsive","Molecular exchange and reversible assembly may permit transcription-associated condensates to respond to changing inputs while enriching regulatory components locally.","Input timing, exchange kinetics and nascent RNA in the same cells."],
    energy:["⚡","Energy status can shift the operating regime","ATP-dependent chromatin remodeling, transcription and chaperone activity can modify condensate turnover and the wider transcriptional system. Low ATP is not a condensate-specific perturbation.","ATP status, cell viability, global transcription, exchange and locus-specific nascent RNA."],
    stress:["⌁","Stress can remodel assembly and dissolution","Changes in temperature, pH, redox state or molecular crowding may alter interaction strengths and material properties. Effects depend on condensate composition and cell context.","Physicochemical state, upstream signaling, condensate kinetics and transcriptional response."],
    aging:["◈","Restricted exchange may delay reset","Less dynamic or more solid-like assemblies may exchange components slowly and remain after input withdrawal. This is a possible regime, not a universal outcome for all condensates.","FRAP and orthogonal mobility measures, dissolution kinetics and transcription after signal withdrawal."]
  };
  function showContext(key){
    var d=contextData[key];if(!d)return;
    $$(".tkf-context").forEach(function(b){b.classList.toggle("is-active",b.dataset.context===key);});
    ["#tkf-context-icon","#tkf-context-title","#tkf-context-copy","#tkf-context-readout"].forEach(function(s,i){setText(s,d[i]);});
  }
  $$(".tkf-context").forEach(function(b){b.addEventListener("click",function(){showContext(b.dataset.context);});});

  var perturbations={
    pulse:["Brief vs sustained optogenetic pulse","Deliver amplitude-matched short and sustained inputs, then follow condensate onset, dissolution and nascent transcription in the same cells.","Temporal output may reflect pathway activation and promoter regulation associated with the delivered signal pattern.","If condensate kinetics contribute, onset latency, lifetime or reset should predict nascent transcription after accounting for input dynamics.","Match expression, nuclear localization, DNA binding and upstream signaling; include a dark/vehicle control.","Nascent transcription remains unchanged after validated changes in condensate kinetics."],
    exchange:["Alter molecular exchange","Use a validated perturbation that changes exchange dynamics while preserving abundance, localization and DNA binding as far as possible.","Changes in protein binding or enzymatic activity could alter transcription independently of condensate exchange.","A kinetic-filter contribution predicts altered pulse transmission or reset when exchange changes, with upstream input matched.","FRAP plus an orthogonal mobility assay, matched expression and functional rescue.","Temporal transcription does not change when exchange is selectively altered and all controls remain comparable."],
    dissolution:["Accelerate condensate dissolution","Apply a reversible method that shortens condensate persistence after signal withdrawal and quantify subsequent nascent transcription.","Transcription may fall because the initiating pathway stops or Pol II enters an inactive state.","If persistence stores temporal history, shortening it should reduce post-input transcriptional carryover or change response to a second pulse.","Verify dissolution, upstream signal, factor abundance, promoter occupancy and rescue.","Verified change in dissolution produces no change in temporal transcription or second-pulse response."],
    idr:["Condensation-impaired variant","Compare matched wild-type and interaction-domain variants with measured effects on assembly latency and lifetime.","Sequence changes may affect protein folding, DNA binding, localization or cofactor interaction beyond condensation.","A kinetic-filter contribution predicts a changed input-duration or frequency response that tracks the altered condensate kinetics.","Match expression, localization, stability and DNA-binding capacity; include a rescue variant.","The temporal phenotype persists unchanged after a validated selective alteration in assembly."],
    rna:["Perturb RNA-linked feedback","Perturb nascent RNA accumulation or an RNA–protein interaction and track condensate change alongside nascent transcription.","RNA changes may directly alter transcription, splicing, stability or factor recruitment without condensate mediation.","If RNA accumulation contributes to dissolution, altering the feedback should shift the delay between RNA production and condensate shrinkage.","Measure RNA production and decay, condensate dynamics, and independent transcriptional effects of the perturbation.","Condensate reset kinetics remain unchanged or transcript dynamics are fully explained by direct RNA effects."]
  };
  var measurements={
    nascent:["Condensate imaging plus nascent RNA timing","Image the candidate assembly and use an endogenous nascent-RNA approach or validated burst reporter in the same cells.","Quantifies the input-to-output relation and measures both assembly and transcription.","Test whether altered assembly latency, lifetime or dissolution predicts altered transcriptional onset, burst duration or carryover.","Endogenous protein levels where feasible, reporter controls, viability, upstream input and matched sampling.","No temporal association or causal change after orthogonal condensate perturbations."],
    frap:["FRAP and molecular exchange","Measure recovery curves and condensate dissolution, with controls for bleach geometry, expression level and diffusion/binding contributions.","Provides system-dependent estimates of apparent molecular mobility and exchange.","If exchange is a kinetic filter parameter, changes in measured exchange should predict a corresponding change in transcriptional timing.","Orthogonal mobility method, unbleached controls, matched condensate size and expression.","Measured exchange changes without any reproducible change in temporal output."],
    burst:["Single-cell transcriptional burst kinetics","Quantify burst initiation, duration and output across signal patterns and matched condensate perturbations.","Reports how transcription switches between active and inactive states.","Test whether burst frequency, duration or output covaries with condensate latency, occupancy and persistence.","Matched input and cell state, sufficient time resolution, endogenous or validated reporters.","Burst properties follow upstream input or promoter state but not condensate kinetics."],
    input:["Upstream signaling and chromatin controls","Measure upstream pathway dynamics, transcription-factor abundance and localization, DNA occupancy, accessibility and relevant enzymatic activity alongside condensate and transcription outputs.","Controls for alternative temporal-decoding mechanisms.","A condensate-specific interpretation requires temporal output differences after these alternative mechanisms are accounted for.","Matched expression, localization, DNA binding, chromatin state, viability and rescue.","An upstream or chromatin change fully explains transcriptional differences."]
  };
  function buildExperiment(){
    var p=perturbations[$("#tkf-perturbation").value],m=measurements[$("#tkf-measurement").value];if(!p||!m)return;
    setText("#tkf-experiment-title",p[0]);
    setText("#tkf-experiment-design",p[1]+" "+m[1]);
    setText("#tkf-experiment-prediction",p[3]+" "+m[3]);
    setText("#tkf-experiment-alternative",p[2]+" "+m[2]);
    setText("#tkf-experiment-readout",m[0]);
    setText("#tkf-experiment-controls",p[4]+" "+m[4]);
    setText("#tkf-experiment-falsifier",p[5]+" "+m[5]);
    setText("#tkf-experiment-status","Plan generated · "+p[0]);
    $("#tkf-experiment-output").setAttribute("data-generated","true");
  }
  function markDirty(){setText("#tkf-experiment-status","Selections changed. Generate an updated plan.");$("#tkf-experiment-output").setAttribute("data-generated","false");}
  $("#tkf-build-experiment").addEventListener("click",buildExperiment);
  $("#tkf-perturbation").addEventListener("change",markDirty);
  $("#tkf-measurement").addEventListener("change",markDirty);

  renderSimulation();renderBursts();showFilter("threshold");showContext("baseline");buildExperiment();
})();