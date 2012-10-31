var ___ = 0x00,
    E__ = 0x01,
    _C_ = 0x02,
    EC_ = 3,
    __W = 0x04,
    E_W = 5,
    _CW = 6,
    ECW = 7,
    __A = 0x08,
    E_A = 9,
    _CA = 10,
    ECA = 11;


$__defineMethods = function defineMethods(obj, props){
  for (var i in props) {
    $__SetInternal(props[i], 'Native', true);
    $__defineDirect(obj, props[i].name, props[i], _CW);
    $__deleteDirect(props[i], 'prototype');
  }
  return obj;
};

$__defineProps = function defineProps(obj, props){
  for (var name in props) {
    var prop = props[name];
    $__defineDirect(obj, name, prop, _CW);
    if (typeof prop === 'function') {
      $__SetInternal(prop, 'Native', true);
      $__defineDirect(prop, 'name', name, ___);
      $__deleteDirect(prop, 'prototype');
    }
  }
  return obj;
};

$__defineConstants = function defineConstants(obj, props){
  for (var k in props) {
    $__defineDirect(obj, k, props[k], ___);
  }
};

$__setupConstructor = function setupConstructor(ctor, proto){
  $__defineDirect(ctor, 'prototype', proto, ___);
  $__defineDirect(ctor.prototype, 'constructor', ctor, ___);
  $__defineDirect(global, ctor.name, ctor, _CW);
  $__SetInternal(ctor, 'Native', true);
  $__SetInternal(ctor, 'NativeConstructor', true);
};

$__EmptyClass = function constructor(...args){
  super(...args);
};