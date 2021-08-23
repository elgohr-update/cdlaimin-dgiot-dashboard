// * @Author: h7ml
// * @Date: 2021-08-23 18:12:12
// * @LastEditors: vivi
// * @LastEditTime: 2021-08-23 18:12:12
// * @Description: dgiot doc api
// * @FilePath: src\api\Article\index.js
// * @DocumentLink: http://prod.iotn2n.com/swagger/#/Article
import {
  query_object,
  get_object,
  del_object,
  update_object,
  create_object,
} from '@/api/shuwa_parse'

export async function createArticle(params) {
  return create_object('Article', params)
}
export async function getArticle(ObjectId) {
  return get_object('Article', ObjectId)
}

export async function delArticle(ObjectId) {
  return del_object('Article', ObjectId)
}

export async function putArticle(ObjectId, params) {
  return update_object('Article', ObjectId, params)
}

export async function queryArticle(params) {
  return query_object('Article', params)
}
