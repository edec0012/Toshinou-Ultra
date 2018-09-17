class Settings {
  constructor() {
    this.defaults = {
      pause: false,
      palladium: false,
      refresh: false,
      moveRandomly: false,
      killNpcs: false,
      fleeFromEnemy: false,
      jumpFromEnemy: false,
      dodgeTheCbs: false,
      avoidAttackedNpcs: false,
      circleNpc: false,
      dontCircleWhenHpBelow25Percent: false,
      resetTargetWhenHpBelow25Percent: false,
      repairWhenHpIsLowerThanPercent: false,
      ggbot: false,
      alpha: false,
      beta: false,
      gamma: false,
      delta: false,
      epsilon: false,
      zeta: false,
      kappa: false,
      lambda: false,
      kronos: false,
      hades: false,
      kuiper: false,
      lockNpcs: false,
      lockPlayers: false,
      autoAttack: false,
      autoAttackNpcs: false,
      npcCircleRadius : 500,
      npcs: {},
      bonusBox: false,
      materials: false,
      cargoBox: false,
      greenOrGoldBooty: false,
      redBooty: false,
      blueBooty: false,
      masqueBooty: false,
      collectBoxWhenCircle: false,
      autoChangeConfig: false,
      attackConfig: 1,
      flyingConfig: 1,
      changeFormation: false,
      attackFormation: -2,
      flyingFormation: -2,
      useAbility: false,
      abilitySlot: -1,
      reviveType: 1,
      reviveLimit: 5,
      workmap: 0
    };
    chrome.storage.local.get(this.defaults, items => {
      console.log(items);
      this.settings = items;
    });
  }


  setNpc(name, val) {
    if(this.settings.npcs[name] == null){
      this.settings.npcs[name] = 500;
    }else{
      this.settings.npcs[name] = val;
    }
  }

  getNpc(name) {
    return !this.settings.npcs[name];
  }

  loadSettingsToInterface(){
    Object.keys(this.settings).forEach((key) =>{
			let a = document.getElementById(key);
			if(a){	
			switch(a.type){
				case "checkbox":
					a.checked = this.defaults[key];
					break;
				case "range":
				case "select":
					a.value = this.defaults[key];
					break;
				default:
					console.log(a.type);
					break;
				}
			}
		});
  }
}