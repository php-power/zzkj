<?php
namespace app\mobile\controller;
use think\Db;
use clt\Leftnav;
use think\Controller;
class Common extends Controller
{
    public function initialize()
    {
        if(!isMobile()){
            $this->redirect('home/index/index');
        }
        $sys = cache('System');
        $this->assign('sys',$sys);

        //导航
        $cate = cache('cate');
        if(!$cate){
            $column_one = Db::name('category')->where([['parentid','=',0],['ismenu','=',1]])->order('sort')->select();
            $column_two = Db::name('category')->where('ismenu',1)->order('sort')->select();
            $tree = new Leftnav ();
            $cate = $tree->index_top($column_one,$column_two);
            cache('cate', $cate, 3600);
        }
        $this->assign('category',$cate);

        //二级导航
        $thisCat = Db::name('category')->where('id',input('catId'))->find();
        $this->assign('title',$thisCat['title']);
        $this->assign('keywords',$thisCat['keywords']);
        $this->assign('description',$thisCat['description']);
        define('DBNAME',strtolower($thisCat['module']));
        $this->pagesize = $thisCat['pagesize']>0 ? $thisCat['pagesize'] : '';
        $produtList = Db::name('product')->where(['type_name'=>1,'open'=>0])->order('sort asc,id desc')->limit('10')->select();
        $this->assign('produtList', $produtList);
		//广告
        $adList = Db::name('ad')->where(['position'=>2,'open'=>1])->order('sort asc,id desc')->limit('4')->select();
        $this->assign('adList', $adList);

    }
    //空操作
    public function _empty(){
        return $this->error('空操作，返回上次访问页面中...');
    }
}
