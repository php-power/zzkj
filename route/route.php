<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
Route::get('ZZKJ', function () {
    return 'hello,ZZKJ!';
});
Route::get('hello/:name', 'index/hello');

return [
    '/'=>'home/index/index',	
    'productdetail-:id'=>'home/index/productdetail',
    'productlist-:pid'=>'home/index/productlist',

];
