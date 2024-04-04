import { reactive, watch } from "vue";

function syncStorage(key, reactiveObject){
  watch(reactiveObject, (newStorage) => {
    window.localStorage.setItem(key, JSON.stringify(newStorage));
  }, {
    deep: true
  });
  return reactiveObject;
};
export default function(key, defaultObject = {}, {validator = () => true}){
  let rawData = window.localStorage.getItem(key);
  if(!rawData){
    return syncStorage(key, reactive(defaultObject));
  }
  try{
    rawData = JSON.parse(rawData);
  } catch{
    return syncStorage(key, reactive(defaultObject));
  }
  if(!validator(rawData)){
    return syncStorage(key, reactive(defaultObject));
  }
  return syncStorage(key, reactive(rawData));
};