import ajaxLib from '../../lib/ajax';
const ajax = ajaxLib.ajax;
const url = 'https://m.yixiutech.com';
// const url = "https://yixiu.natappvip.cc";


//根据筛选条件获取商家列表
export function getShopListSort(data) {
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/shop/filter`, data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}

//获取商家总数
export function getShopListAllNumber() {
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/shop/count`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}

//通过商家ID获取商家详情
export function getShopData(shopId) {
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/shop/${shopId}`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}


//更改商户信息
export function changeState(data) {
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/shop/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}


//根据筛选条件获取订单列表
export function getOrderListData(data) {
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/order/service/filter`, data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}

//根据筛选条件获取订单列表 全系统级别
export function getAllOrderListData(data) {
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/order/filter`, data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}

// 管理员登录
export function managerlogin(data) {
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/user/login/sys`, data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    })
  })
}

// 根据筛选条件获取问题详情
export function getQuestionList(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/question/filter`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 修改问题信息
export function updateQuestion(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/question/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 获取手机品牌
export function getPhoneBrand(){
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/phone/manufacturer`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 删除手机品牌
export function delPhoneBrand(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/manufacturer/delete`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 更新手机品牌
export function updataPhoneBrand(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/manufacturer/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 添加手机品牌
export function addPhoneBrand(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/manufacturer`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 根据手机品牌ID查询手机型号
export function getPhoneModelById(id){
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/phone/model/${id}`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 删除手机型号
export function delPhoneModel(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/model/delete`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 更新手机型号
export function updataPhoneModel(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/model/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 添加手机型号
export function addPhoneModel(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/phone/model`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 获取服务分类
export function getServiceCategory(){
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/category/phoneRepair`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 删除服务分类
export function delServiceCategory(id){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/category/delete`,id).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 更新服务分类
export function updataServiceCategory(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/category/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 添加服务分类
export function addServiceCategory(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/category`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}



// 根据服务分类ID查询服务
export function getServiceById(id){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/service/shop`,id).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 删除服务
export function delService(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/service/delete`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 更新服务
export function updataService(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/service/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 添加服务
export function addService(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/service`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 查询所有类型
export function getALL(){
  return new Promise((resolve, reject) => {
    ajax.get(`${url}/category/sys?type=all`).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}


// 获取店铺统计信息
export function getshopAllData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/stats/shop`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

export function getshopareaData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/stats/area`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}




// 视频查询
export function getVideoData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/sql/find`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 视频添加
export function addVideoData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/sql/add`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 删除培训
export function delVideoData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/sql/remove`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 更新培训
export function upVideoData(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/sql/update`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 发生验证短信
export function sendmessage(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/sms/send`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 注册
export function useRegin(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/reg`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 登录
export function useLogin(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/login`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

// 修改密码
export function useChange(data){
  return new Promise((resolve, reject) => {
    ajax.post(`${url}/user/update/password`,data).then((res) => {
      resolve(res);
    }).then((err) => {
      reject(err);
    });
  });
}

