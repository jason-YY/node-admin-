
let baseUrl = 'api';

module.exports = {
   

    // user
    userList: baseUrl + '/user/list',
    userDelete: baseUrl + '/user/delete',
    userAdd: baseUrl + '/user/add',
    userDeleteMulti: baseUrl + '/user/delete-multi',
    userLogin: baseUrl + '/user/login',
    userLogout: baseUrl + '/user/logout',
    userAutoLogin: baseUrl + '/user/auto-login',
    userChangeRole: baseUrl + '/user/change-role',
	
	
	
 // member
    memberList: baseUrl + '/member/list',
    memberDetail: baseUrl + '/member/detail',
    memberDelete: baseUrl + '/member/delete',
    memberAdd: baseUrl + '/member/add',
    memberDeleteMulti: baseUrl + '/member/delete-multi',
    memberChangeRole: baseUrl + '/member/change-role',

	

	
	 // goods
    goodsList: baseUrl + '/goods/list',
    goodsDetail: baseUrl + '/goods/detail',
    goodsDelete: baseUrl + '/goods/delete',
    goodsAdd: baseUrl + '/goods/add',
    goodsDeleteMulti: baseUrl + '/goods/delete-multi',
    goodsUploadImg: baseUrl + '/goods/upload-img',
};