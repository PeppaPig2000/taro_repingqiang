import request from '../utils/request'
import {serverUrl} from '../config'
/**
 * 云村热评
 * @param data
 * @returns {*}
 */
export function hotwallapi() {
  return request(serverUrl+'/comment/hotwall/list','get')
}
