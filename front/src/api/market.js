import request from '@/utils/request'

export function addActivity(activity) {
  console.log(activity)
  return request({
    url: '/market/addActivity',
    method: 'post',
    params: activity
  })
}
