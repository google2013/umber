require=function t(e,n,o){function i(c,r){if(!n[c]){if(!e[c]){var a="function"==typeof require&&require;if(!r&&a)return a(c,!0);if(s)return s(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[c]={exports:{}};e[c][0].call(h.exports,function(t){var n=e[c][1][t];return i(n?n:t)},h,h.exports,t,e,n,o)}return n[c].exports}for(var s="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({"audio-control":[function(t,e,n){"use strict";cc._RFpush(e,"6cb9d2oD3pDn6l9KKq+EVxr","audio-control"),cc.Class({"extends":cc.Component,properties:{audio:cc.AudioSource,toggleAble:!1},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0,this.node.on("hit",this.onHit,this),console.log(this.audio.isPlaying),this.audio.isPlaying||(this.audio.volume=0,this.audio.play())},toggleAudio:function(){this.toggleAble&&(this.audio.isPlaying?this.audio.pause():this.audio.resume())},onHit:function(){this.toggleAudio()},onCollisionEnter:function(t,e){"bullet"==t.node.group&&this.toggleAudio()}}),cc._RFpop()},{}],"audio-range-script":[function(t,e,n){"use strict";cc._RFpush(e,"058bfvEP0hOcbJ4QDcRwVgr","audio-range-script"),cc.Class({"extends":cc.Component,properties:{audio:cc.AudioSource},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},onCollisionStay:function(t,e){if("player"==t.node.group){var n=this.node.convertToNodeSpaceAR(t.node.parent.convertToWorldSpaceAR(t.node.position)),o=n.mag(),i=e.radius,s=cc.clamp01(o/i),c=1-s;this.audio.volume=c/2}},onCollisionExit:function(t,e){"player"==t.node.group&&(this.audio.volume=0)}}),cc._RFpop()},{}],"broken-wall-script":[function(t,e,n){"use strict";cc._RFpush(e,"24fa7BcJjpEBLSVlvoqWWV4","broken-wall-script"),cc.Class({"extends":cc.Component,properties:{_breaking:!1,delay:5},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},onCollisionEnter:function(t,e){"player"==t.node.group&&this.scheduleOnce(this.startBreak,this.delay)},onCollisionExit:function(t,e){"player"==t.node.group&&this.unschedule(this.startBreak,this.delay)},startBreak:function(){this.node.removeFromParent()}}),cc._RFpop()},{}],"btn-script":[function(t,e,n){"use strict";cc._RFpush(e,"2845eFvCKdFG7OrGj/01Ctx","btn-script"),cc.Class({"extends":cc.Component,properties:{btnArray:[cc.Node],_initActive:[],_touchNum:0},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},start:function(){var t=!0,e=!1,n=void 0;try{for(var o,i=this.btnArray[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;this._initActive[s.uuid]=s.active}}catch(c){e=!0,n=c}finally{try{!t&&i["return"]&&i["return"]()}finally{if(e)throw n}}},onCollisionEnter:function(t,e){if("bullet"==t.node.group){this._touchNum++,this.node.color=cc.Color.GREEN;var n=!0,o=!1,i=void 0;try{for(var s,c=this.btnArray[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var r=s.value;r.active=!this._initActive[r.uuid]}}catch(a){o=!0,i=a}finally{try{!n&&c["return"]&&c["return"]()}finally{if(o)throw i}}}},onCollisionExit:function(t,e){if("bullet"==t.node.group&&(this._touchNum--,!this._touchNum)){var n=!0,o=!1,i=void 0;try{for(var s,c=this.btnArray[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var r=s.value;r.active=this._initActive[r.uuid]}}catch(a){o=!0,i=a}finally{try{!n&&c["return"]&&c["return"]()}finally{if(o)throw i}}this.node.color=cc.Color.RED}}}),cc._RFpop()},{}],"bullet-script":[function(t,e,n){"use strict";cc._RFpush(e,"b9292ddpqpGZKwZr8n+R1z1","bullet-script"),cc.Class({"extends":cc.Component,properties:{maxDistance:300},init:function(t){var e=180*cc.pToAngle(t)/Math.PI;this.node.rotation=-e,this.node.runAction(cc.sequence(cc.moveBy(3,cc.pMult(cc.pNormalize(t),this.maxDistance)),cc.removeSelf(!0)))}}),cc._RFpop()},{}],"cmd-fsm":[function(t,e,n){"use strict";cc._RFpush(e,"e3313VeZ1tIaZ3zsT+e0/Y8","cmd-fsm");var o=t("state-machine"),i={initial:"nope",events:[{name:"startup",from:"nope",to:"idling"},{name:"hit",from:"idling",to:"hiting"},{name:"hit",from:"shooting",to:"hiting"},{name:"hit",from:"opening",to:"hiting"},{name:"open",from:"shooting",to:"opening"},{name:"idle",from:"opening",to:"idling"},{name:"idle",from:"hiting",to:"idling"},{name:"idle",from:"shooting",to:"idling"},{name:"idle",from:"idling",to:"idling"},{name:"shoot",from:"hiting",to:"shooting"},{name:"shoot",from:"opening",to:"shooting"},{name:"shoot",from:"idling",to:"shooting"},{name:"open",from:"idling",to:"opening"},{name:"open",from:"hiting",to:"opening"},{name:"hit",from:"hiting",to:"hiting"},{name:"shoot",from:"shooting",to:"shooting"},{name:"open",from:"opening",to:"opening"}]},s=function(){var t=o.create(i);return t.ASYNC=o.ASYNC,t};e.exports={create:s},cc._RFpop()},{"state-machine":"state-machine"}],"danger-script":[function(t,e,n){"use strict";cc._RFpush(e,"aaf5dDK+OhAmLa5uIEGjWLf","danger-script"),cc.Class({"extends":cc.Component,properties:{hitMaxTime:6,canDestroy:!0,playerHurtHpUnit:5},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0,this.node.on("hit",this.onHit,this)},onHit:function(){this.hitMaxTime-=6,this.checkDestroy()},checkDestroy:function(){this.hitMaxTime<=0&&this.canDestroy&&(this.node.removeFromParent(!0),cc.find("Canvas").emit("player-hp-up",this.playerHurtHpUnit))},onBulletEnter:function(){this.hitMaxTime--,this.checkDestroy()},onBulletExit:function(){},onCollisionEnter:function(t,e){"bullet"==t.node.group?this.onBulletEnter():"player"==t.node.group&&cc.find("Canvas").emit("player-hp-down",this.playerHurtHpUnit)},onCollisionExit:function(t,e){"bullet"==t.node.group&&this.onBulletExit()}}),cc._RFpop()},{}],"easing-helper":[function(t,e,n){"use strict";cc._RFpush(e,"4ca871EKElJm7q8fcHRSQ0R","easing-helper");var o=cc.Enum({easeIn:0,easeOut:1,easeInOut:2,easeExponentialIn:3,easeExponentialOut:4,easeExponentialInOut:5,easeSineIn:6,easeSineOut:7,easeSineInOut:8,easeElasticIn:9,easeElasticOut:10,easeElasticInOut:11,easeBounceIn:12,easeBounceOut:13,easeBounceInOut:14,easeBackIn:15,easeBackOut:16,easeBackInOut:17,easeQuadraticActionIn:18,easeQuadraticActionOut:19,easeQuadraticActionInOut:20,easeQuarticActionIn:21,easeQuarticActionOut:22,easeQuarticActionInOut:23,easeQuinticActionIn:24,easeQuinticActionOut:25,easeQuinticActionInOut:26,easeCircleActionIn:27,easeCircleActionOut:28,easeCircleActionInOut:29,easeCubicActionIn:30,easeCubicActionInOut:31,nope:32});e.exports=o,cc._RFpop()},{}],"follow-danger":[function(t,e,n){"use strict";cc._RFpush(e,"009d8LrG7FJCY5r6g6SYIQU","follow-danger"),cc.Class({"extends":cc.Component,properties:{player:cc.Node,speed:5},onLoad:function(){},update:function(){var t=cc.pMult(cc.pNormalize(cc.pSub(this.player.position,this.node.position)),this.speed);this.node.position=cc.pAdd(this.node.position,t)}}),cc._RFpop()},{}],"gate-control":[function(t,e,n){"use strict";cc._RFpush(e,"b981fhy7RFKW7iAVxaJl5dG","gate-control"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},onCollisionEnter:function(t,e){"player"==t.node.group&&cc.find("Canvas").emit("touch-gate")}}),cc._RFpop()},{}],"hit-range-script":[function(t,e,n){"use strict";cc._RFpush(e,"c10e0L0re9LMafWPfevzwY6","hit-range-script"),cc.Class({"extends":cc.Component,properties:{_colliderArray:[],player:cc.Node},onLoad:function(){this.node.on("hit",this.onHit,this);var t=cc.director.getCollisionManager();t.enabled=!0},onHit:function(t){t.detail;for(var e in this._colliderArray){var n=this._colliderArray[e];n.emit("hit")}},onCollisionEnter:function(t,e){"danger"!=t.node.group&&"audio-core"!=t.node.group||(this._colliderArray[t.node.uuid]=t.node)},onCollisionExit:function(t,e){"danger"!=t.node.group&&"audio-core"!=t.node.group||delete this._colliderArray[t.node.uuid]}}),cc._RFpop()},{}],"level-mgr":[function(t,e,n){"use strict";cc._RFpush(e,"54cf17lf2BNpaGML+CZ95b9","level-mgr"),cc.Class({"extends":cc.Component,properties:{level:0,_sceneLoading:!1},onLoad:function(){cc.systemEvent.on("keydown",this.onKeyDown,this),this.node.on("touch-gate",this.nextLevel,this),this.node.on("hp-zero",this.restart,this)},restart:function(){this._sceneLoading||(this._sceneLoading=!0,cc.director.loadScene("level-"+this.level+"-scene"))},nextLevel:function(){this._sceneLoading||(this._sceneLoading=!0,cc.director.loadScene("level-"+(this.level+1)+"-scene"))},onKeyDown:function(t){t.keyCode==cc.KEY.r&&(this._sceneLoading||(this._sceneLoading=!0,cc.director.loadScene("level-"+this.level+"-scene")))}}),cc._RFpop()},{}],"player-hp-control":[function(t,e,n){"use strict";cc._RFpush(e,"0d285ARw8lDvqkXF2TdI7Ip","player-hp-control"),cc.Class({"extends":cc.Component,properties:{_hp:100,hp:{get:function(){return this._hp},set:function(t){this._hp=t,this.getComponent(cc.Label).string=t<0?0:t}}},onLoad:function(){cc.find("Canvas").on("player-hp-up",this.onPlayerHpUp,this),cc.find("Canvas").on("player-hp-down",this.onPlayerHpDown,this),this.hp=this._hp},onPlayerHpUp:function(t){this.hp+=t.detail},onPlayerHpDown:function(t){this.hp-=t.detail,this.checkDead()},checkDead:function(){this.hp<=0&&cc.find("Canvas").emit("hp-zero")}}),cc._RFpop()},{}],"player-move-control":[function(t,e,n){"use strict";cc._RFpush(e,"b8a50t1kA5HT4XVwIw0hJaV","player-move-control"),cc.Class({"extends":cc.Component,properties:{_left:!1,_right:!1,_up:!1,_down:!1,_leftRelease:!1,_rightRelease:!1,stepX:5,stepY:5,_outerSpeed:cc.v2(),a:cc.v2(0,-10),_speed:cc.v2(0,0),_jumping:!1,_leftBlock:0,_rightBlock:0,_upBlock:0,_downBlock:0,_space:!1,_open:!1,_umbrellaControl:{get:function(){return this.getComponent("umbrella-control")}},drag:.3},onLoad:function(){this.node.on("open",this.onOpen,this),this.node.on("leave-open",this.onLeaveOpen,this);var t=cc.director.getCollisionManager();t.enabled=!0,cc.systemEvent.on("keydown",this.onKeyDown,this),cc.systemEvent.on("keyup",this.onKeyUp,this)},onOpen:function(){this._open=!0},onLeaveOpen:function(){this._open=!1},onKeyDown:function(t){switch(t.keyCode){case cc.KEY.w:0==this._jumping&&(this._up=!0,this._jumping=!0);break;case cc.KEY.s:this._down=!0;break;case cc.KEY.a:this._left=!0;break;case cc.KEY.d:this._right=!0;break;case cc.KEY.space:this._space=!0}},onKeyUp:function(t){switch(t.keyCode){case cc.KEY.s:this._down=!1;break;case cc.KEY.a:this._left=!1,this._leftRelease=!0;break;case cc.KEY.d:this._right=!1,this._rightRelease=!0;break;case cc.KEY.space:this._space=!1}},shouldHandleCollsion:function(t){return"wall"==t.node.group||"broken-wall"==t.node.group},onCollisionEnter:function(t,e){if(this.shouldHandleCollsion(t)){var n=e.world.aabb,o=t.world.aabb,i=e.world.preAabb,s=t.world.preAabb,c=[];if(i.xMax<=s.xMin&&n.xMax>=o.xMin){this._rightBlock++;var r=e.node.x-Math.abs(n.xMax-o.xMin);this.node.x=r,c.push({direction:"_rightBlock",edgePositionX:r})}if(i.xMin>=s.xMax&&n.xMin<=o.xMax){this._leftBlock++;var a=e.node.x+Math.abs(n.xMin-o.xMax);this.node.x=a,c.push({direction:"_leftBlock",edgePositionX:a})}if(i.yMax<=s.yMin&&n.yMax>=o.yMin){this._upBlock++;var l=e.node.y-Math.abs(n.yMax-o.yMin);this.node.y=l,c.push({direction:"_upBlock",edgePositionY:l})}if(i.yMin>=s.yMax&&n.yMin<=o.yMax){this._downBlock++;var h=e.node.y+Math.abs(n.yMin-o.yMax);this.node.y=h,c.push({direction:"_downBlock",edgePositionY:h})}void 0==t.blockArray&&(t.blockArray=[]),t.blockArray[e.uuid]=c}},onCollisionExit:function(t,e){if(this.shouldHandleCollsion(t)&&void 0!=t.blockArray){var n=t.blockArray[e.uuid],o=!0,i=!1,s=void 0;try{for(var c,r=n[Symbol.iterator]();!(o=(c=r.next()).done);o=!0){var a=c.value;this[a.direction]--}}catch(l){i=!0,s=l}finally{try{!o&&r["return"]&&r["return"]()}finally{if(i)throw s}}}},lateUpdate:function(t){this._left&&!this._leftBlock&&this._speed.x>-this.stepX&&(this._speed.x=-this.stepX),this._leftRelease&&this._speed.x<0&&this._speed.x>=-this.stepX&&(this._leftRelease=!1,this._speed.x=0),this._right&&!this._rightBlock&&this._speed.x<this.stepX&&(this._speed.x=this.stepX),this._rightRelease&&this._speed.x>0&&this._speed.x<=this.stepX&&(this._rightRelease=!1,this._speed.x=0),this._up?(this._jumping=!0,this._up=!1,this._speed.y+=this.stepY):(this._downBlock||this._space&&(this._leftBlock||this._rightBlock))&&(this._jumping=!1,this._speed.y=0),this._speed=cc.pAdd(this._speed,cc.pMult(this.a,t)),this._leftBlock&&this._speed.x<0&&(this._speed.x=0),this._rightBlock&&this._speed.x>0&&(this._speed.x=0),this._upBlock&&this._speed.y>0&&(this._speed.y=0),this._downBlock&&this._speed.y<0&&(this._speed.y=0);var e=this._speed;if(this._open){var n=this._umbrellaControl._vector;if(n){var o=cc.pDot(cc.pNormalize(this._speed),cc.pNormalize(n));e=cc.pMult(this._speed,1+o*this.drag)}}var i=cc.pMult(e,t);this.node.position=cc.pAdd(this.node.position,i),this.node.parent.position=cc.pNeg(this.node.position)}}),cc._RFpop()},{}],"rotate-helper":[function(t,e,n){"use strict";cc._RFpush(e,"7fca4VL/RJDJbwlu3SCuesh","rotate-helper"),cc.Class({"extends":cc.Component,properties:{target:cc.Node,targetAngle:0,delay:5},onEnable:function(){this.target.runAction(cc.rotateTo(this.delay,this.targetAngle))},onDisable:function(){this.target.stopAction()}}),cc._RFpop()},{}],"simple-action-control":[function(t,e,n){"use strict";cc._RFpush(e,"aba4bI7z8FB3rTkTjubt62A","simple-action-control"),cc.Class({"extends":cc.Component,properties:{_simpleActionHelperArray:null,loop:!1,easingRate:3,_easingHelper:null},onLoad:function(){this._easingHelper=t("easing-helper"),this._simpleActionHelperArray=this.getComponents("simple-action-helper"),this.anim()},anim:function(){var t=this._simpleActionHelperArray.shift();if(t){var e=t.moveTo,n=t.rotateTo,o=t.scaleTo,i=t.deltaTime,s=t.easing,c=null,r=null,a=null;s==this._easingHelper.nope?(c=cc.moveTo(i,e),r=cc.rotateTo(i,n),a=cc.scaleTo(i,o.x,o.y)):(c=cc.moveTo(i,e).easing(cc[this._easingHelper[s]](this.easingRate)),r=cc.rotateTo(i,n).easing(cc[this._easingHelper[s]](this.easingRate)),a=cc.scaleTo(i,o.x,o.y).easing(cc[this._easingHelper[s]](this.easingRate))),this.node.runAction(cc.sequence(cc.spawn(c,r,a),cc.callFunc(this.anim.bind(this)))),this.loop&&this._simpleActionHelperArray.push(t)}}}),cc._RFpop()},{"easing-helper":"easing-helper"}],"simple-action-helper":[function(t,e,n){"use strict";cc._RFpush(e,"c9eeesZCDVMb4EdmhzW8LQZ","simple-action-helper"),cc.Class({"extends":cc.Component,editor:{executeInEditMode:!0},properties:{easing:{"default":t("easing-helper").nope,type:t("easing-helper")},deltaTime:0,updateAll:{get:function(){return!1},set:function(t){t&&(this.moveTo=this.node.position,this.scaleTo=cc.v2(this.node.scaleX,this.node.scaleY),this.rotateTo=this.node.rotation)}},moveTo:cc.v2(),updatePosition:{get:function(){return!1},set:function(t){t&&(this.moveTo=this.node.position)}},scaleTo:cc.v2(),updateScale:{get:function(){return!1},set:function(t){t&&(this.scaleTo=cc.v2(this.node.scaleX,this.node.scaleY))}},rotateTo:0,updateRotate:{get:function(){return!1},set:function(t){t&&(this.rotateTo=this.node.rotation)}}}}),cc._RFpop()},{"easing-helper":"easing-helper"}],"simple-action-item":[function(t,e,n){"use strict";cc._RFpush(e,"a4950mS5otJHJP/TKj3oPLV","simple-action-item");var o=cc.Class({properties:{moveTo:cc.v2(),scaleTo:cc.v2(),rotateTo:0,deltaTime:0}});e.exports=o,cc._RFpop()},{}],"state-gizmo-mgr":[function(t,e,n){"use strict";cc._RFpush(e,"94f245sI+lICLtC5EZD3kfM","state-gizmo-mgr"),cc.Class({"extends":cc.Component,properties:{panel:cc.Node,stateGizmoPrefab:cc.Prefab,_stateGizmo:null,_fsm:null,_startPosition:null,_selecting:!1,_state:null,player:cc.Node},onLoad:function(){this._stateGizmo=cc.instantiate(this.stateGizmoPrefab),this._fsm=t("cmd-fsm").create(),this._fsm.onhit=function(){this.player.emit("hit")}.bind(this),this._fsm.onshoot=function(){this.player.emit("shoot")}.bind(this),this._fsm.onopen=function(){this.player.emit("open")}.bind(this),this._fsm.onleaveopening=function(){this.player.emit("leave-open")}.bind(this)},start:function(){this._fsm.startup(),this.panel.on("mousedown",this.onMouseDown,this),this.panel.on("mousemove",this.onMouseMove,this),this.panel.on("mouseup",this.onMouseUp,this)},onMouseDown:function(t){2==t.getButton()&&(this._selecting=!0,this.player.emit("lock-vector",t.getLocation()),this._startPosition=t.getLocation(),this._stateGizmo.parent=this.panel,this._stateGizmo.position=this.panel.convertToNodeSpaceAR(t.getLocation()))},updateOpacity:function(){this._stateGizmo.getChildByName("hit-mask").opacity="hit"==this._state?255:130,this._stateGizmo.getChildByName("open-mask").opacity="open"==this._state?255:130,this._stateGizmo.getChildByName("shoot-mask").opacity="shoot"==this._state?255:130},onMouseMove:function(t){if(this._selecting){var e=180*cc.pToAngle(cc.pSub(t.getLocation(),this._startPosition))/Math.PI;e>=0&&e<120&&(this._state="hit"),e<0&&e>-120&&(this._state="shoot"),(e>=120&&e<=180||e<=-120&&e>=-180)&&(this._state="open"),this.updateOpacity()}},fadeOutItem:function(){var t=this._stateGizmo.getChildByName(this._state+"-mask"),e=cc.instantiate(t);e.parent=this.panel,e.position=this.panel.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position)),e.runAction(cc.sequence(cc.fadeOut(.3),cc.removeSelf(!0)))},onMouseUp:function(t){2==t.getButton()&&(this._state&&this._fsm.can(this._state)&&(this._fsm[this._state](),this.fadeOutItem()),this._selecting=!1,this._stateGizmo.position=cc.v2(1e5,1e5))}}),cc._RFpop()},{"cmd-fsm":"cmd-fsm"}],"state-gizmo-script":[function(t,e,n){"use strict";cc._RFpush(e,"859b55k6JVOM5z6nLLn0lBn","state-gizmo-script"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){}}),cc._RFpop()},{}],"state-machine":[function(t,e,n){"use strict";cc._RFpush(e,"f8f5fUJJaRDrow3tgKhzzJG","state-machine"),function(){var t={VERSION:"2.4.0",Result:{SUCCEEDED:1,NOTRANSITION:2,CANCELLED:3,PENDING:4},Error:{INVALID_TRANSITION:100,PENDING_TRANSITION:200,INVALID_CALLBACK:300},WILDCARD:"*",ASYNC:"async",create:function(e,n){var o="string"==typeof e.initial?{state:e.initial}:e.initial,i=e.terminal||e["final"],s=n||e.target||{},c=e.events||[],r=e.callbacks||{},a={},l={},h=function(e){var n=Array.isArray(e.from)?e.from:e.from?[e.from]:[t.WILDCARD];a[e.name]=a[e.name]||{};for(var o=0;o<n.length;o++)l[n[o]]=l[n[o]]||[],l[n[o]].push(e.name),a[e.name][n[o]]=e.to||n[o];e.to&&(l[e.to]=l[e.to]||[])};o&&(o.event=o.event||"startup",h({name:o.event,from:"none",to:o.state}));for(var p=0;p<c.length;p++)h(c[p]);for(var u in a)a.hasOwnProperty(u)&&(s[u]=t.buildEvent(u,a[u]));for(var u in r)r.hasOwnProperty(u)&&(s[u]=r[u]);return s.current="none",s.is=function(t){return Array.isArray(t)?t.indexOf(this.current)>=0:this.current===t},s.can=function(e){return!this.transition&&void 0!==a[e]&&(a[e].hasOwnProperty(this.current)||a[e].hasOwnProperty(t.WILDCARD))},s.cannot=function(t){return!this.can(t)},s.transitions=function(){return(l[this.current]||[]).concat(l[t.WILDCARD]||[])},s.isFinished=function(){return this.is(i)},s.error=e.error||function(t,e,n,o,i,s,c){throw c||s},s.states=function(){return Object.keys(l).sort()},o&&!o.defer&&s[o.event](),s},doCallback:function(e,n,o,i,s,c){if(n)try{return n.apply(e,[o,i,s].concat(c))}catch(r){return e.error(o,i,s,c,t.Error.INVALID_CALLBACK,"an exception occurred in a caller-provided callback function",r)}},beforeAnyEvent:function(e,n,o,i,s){return t.doCallback(e,e.onbeforeevent,n,o,i,s)},afterAnyEvent:function(e,n,o,i,s){return t.doCallback(e,e.onafterevent||e.onevent,n,o,i,s)},leaveAnyState:function(e,n,o,i,s){return t.doCallback(e,e.onleavestate,n,o,i,s)},enterAnyState:function(e,n,o,i,s){return t.doCallback(e,e.onenterstate||e.onstate,n,o,i,s)},changeState:function(e,n,o,i,s){return t.doCallback(e,e.onchangestate,n,o,i,s)},beforeThisEvent:function(e,n,o,i,s){return t.doCallback(e,e["onbefore"+n],n,o,i,s)},afterThisEvent:function(e,n,o,i,s){return t.doCallback(e,e["onafter"+n]||e["on"+n],n,o,i,s)},leaveThisState:function(e,n,o,i,s){return t.doCallback(e,e["onleave"+o],n,o,i,s)},enterThisState:function(e,n,o,i,s){return t.doCallback(e,e["onenter"+i]||e["on"+i],n,o,i,s)},beforeEvent:function(e,n,o,i,s){if(!1===t.beforeThisEvent(e,n,o,i,s)||!1===t.beforeAnyEvent(e,n,o,i,s))return!1},afterEvent:function(e,n,o,i,s){t.afterThisEvent(e,n,o,i,s),t.afterAnyEvent(e,n,o,i,s)},leaveState:function(e,n,o,i,s){var c=t.leaveThisState(e,n,o,i,s),r=t.leaveAnyState(e,n,o,i,s);return!1!==c&&!1!==r&&(t.ASYNC===c||t.ASYNC===r?t.ASYNC:void 0)},enterState:function(e,n,o,i,s){t.enterThisState(e,n,o,i,s),t.enterAnyState(e,n,o,i,s)},buildEvent:function(e,n){return function(){var o=this.current,i=n[o]||(n[t.WILDCARD]!=t.WILDCARD?n[t.WILDCARD]:o)||o,s=Array.prototype.slice.call(arguments);if(this.transition)return this.error(e,o,i,s,t.Error.PENDING_TRANSITION,"event "+e+" inappropriate because previous transition did not complete");if(this.cannot(e))return this.error(e,o,i,s,t.Error.INVALID_TRANSITION,"event "+e+" inappropriate in current state "+this.current);if(!1===t.beforeEvent(this,e,o,i,s))return t.Result.CANCELLED;if(o===i)return t.afterEvent(this,e,o,i,s),t.Result.NOTRANSITION;var c=this;this.transition=function(){return c.transition=null,c.current=i,t.enterState(c,e,o,i,s),t.changeState(c,e,o,i,s),t.afterEvent(c,e,o,i,s),t.Result.SUCCEEDED},this.transition.cancel=function(){c.transition=null,t.afterEvent(c,e,o,i,s)};var r=t.leaveState(this,e,o,i,s);return!1===r?(this.transition=null,t.Result.CANCELLED):t.ASYNC===r?t.Result.PENDING:this.transition?this.transition():void 0}}};"undefined"!=typeof n?("undefined"!=typeof e&&e.exports&&(n=e.exports=t),n.StateMachine=t):"function"==typeof define&&define.amd?define(function(e){return t}):"undefined"!=typeof window?window.StateMachine=t:"undefined"!=typeof self&&(self.StateMachine=t)}(),cc._RFpop()},{}],"toggle-script":[function(t,e,n){"use strict";cc._RFpush(e,"8a30cVPpQlKh6Z3x28Tq7vY","toggle-script"),cc.Class({"extends":cc.Component,properties:{toggleArray:[cc.Node]},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},onCollisionEnter:function(t,e){if("bullet"==t.node.group){var n=!0,o=!1,i=void 0;try{for(var s,c=this.toggleArray[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var r=s.value;r.active=!r.active}}catch(a){o=!0,i=a}finally{try{!n&&c["return"]&&c["return"]()}finally{if(o)throw i}}this.node.scaleY=-this.node.scaleY}}}),cc._RFpop()},{}],"umbrella-control":[function(t,e,n){"use strict";cc._RFpush(e,"3866fCgJqNCnZs8iPgYoeXn","umbrella-control"),cc.Class({"extends":cc.Component,properties:{_vector:null,panel:cc.Node,_state:null,umbrellaAnim:cc.Animation,umbrellaHandler:cc.Node,bulletPrefab:cc.Prefab,hitRange:cc.Node,_lockVector:null,_worldTargetPosition:null},onLoad:function(){this.panel.on("mousemove",this.onMouseMove,this),this.node.on("open",this.onOpen,this),this.node.on("shoot",this.onShoot,this),this.node.on("hit",this.onHit,this),this.node.on("lock-vector",this.onLockVector,this),this.node.on("position-changed",this.onPositionChanged,this),this.umbrellaAnim.on("stop",this.onAnimStop,this),this.umbrellaAnim.on("finished",this.onAnimStop,this)},onPositionChanged:function(){this.updateVector()},onLockVector:function(t){this._lockVector=t.detail},onAnimStop:function(){this._lockVector=null},updateVector:function(){if(this._worldPosition){this._vector=this.node.convertToNodeSpaceAR(this._worldPosition);var t=180*cc.pToAngle(this._vector)/Math.PI;this.umbrellaHandler.rotation=-t}},onMouseMove:function(t){this._worldPosition=this._lockVector?this._lockVector:t.getLocation(),this.updateVector()},onOpen:function(){this._state="open",this._lockVector=null,this.umbrellaAnim.stop(),this.umbrellaAnim.play("open")},onShoot:function(){this._state="shoot",this.umbrellaAnim.stop(),this.umbrellaAnim.play("shoot");var t=cc.instantiate(this.bulletPrefab);t.position=this.node.position,t.parent=this.node.parent,t.getComponent("bullet-script").init(this._vector)},onHit:function(){this._state="hit",this.hitRange.emit("hit",this._vector);this.umbrellaAnim.play("hit")}}),cc._RFpop()},{}],"wind-control":[function(t,e,n){"use strict";cc._RFpush(e,"c73acg/jmVEb5xnkAVMjXxB","wind-control"),cc.Class({"extends":cc.Component,properties:{windA:cc.v2(0,0)},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0},onCollisionEnter:function(t,e){if("player"==t.node.group){var n=t.node.getComponent("player-move-control");n.a=cc.pAdd(n.a,this.windA)}},onCollisionExit:function(t,e){if("player"==t.node.group){var n=t.node.getComponent("player-move-control");n.a=cc.pSub(n.a,this.windA)}}}),cc._RFpop()},{}]},{},["easing-helper","simple-action-control","simple-action-helper","simple-action-item","cmd-fsm","state-machine","audio-control","audio-range-script","broken-wall-script","btn-script","bullet-script","danger-script","follow-danger","gate-control","hit-range-script","level-mgr","player-hp-control","player-move-control","rotate-helper","state-gizmo-mgr","state-gizmo-script","toggle-script","umbrella-control","wind-control"]);