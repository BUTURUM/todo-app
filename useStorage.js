import { ref, watch } from "vue";

function syncStorage(key, reactiveObject){
  watch(reactiveObject, (newStorage) => {
    window.localStorage.setItem(key, JSON.stringify(newStorage));
  }, {
    deep: true
  });
  return reactiveObject;
};
export default function(key, defaultValue, {validator = () => true}){
  let rawData = window.localStorage.getItem(key);
  if(!rawData){
    return syncStorage(key, ref(defaultValue));
  }
  try{
    rawData = JSON.parse(rawData);
  } catch{
    return syncStorage(key, ref(defaultValue));
  }
  if(!validator(rawData)){
    return syncStorage(key, ref(defaultValue));
  }
  return syncStorage(key, ref(rawData));
};