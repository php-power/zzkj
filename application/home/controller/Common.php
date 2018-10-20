<?php
namespace app\home\controller;
use think\Db;
use clt\Leftnav;
use think\Controller;
class Common extends Controller{
    protected $pagesize,$changyan;
    public function initialize(){
		//print_r(input('catId'));die;
        $sys = cache('System');
        $this->assign('sys',$sys);		
        // if($sys['mobile']=='open'){
            // if(isMobile()){
                // $this->redirect('mobile/index/index');
            // }
        // }
		//strtolower 把所有字符串转化为小写
        //获取控制方法
        $action = request()->action();
        $controller = request()->controller();
        $this->assign('action',($action));
        $this->assign('controller',strtolower($controller));
        define('MODULE_NAME',strtolower($controller));
        define('ACTION_NAME',strtolower($action));
        //导航
        $thisCat = Db::name('category')->where('id',input('catId'))->find();
        $this->assign('title',$thisCat['title']);
        $this->assign('keywords',$thisCat['keywords']);
        $this->assign('description',$thisCat['description']);
		//数据库名称
        define('DBNAME',strtolower($thisCat['module']));
        $this->pagesize = $thisCat['pagesize']>0 ? $thisCat['pagesize'] : '';
        // 获取缓存数据
      $cate = cache('cate');
        if(!$cate){
            $column_one = Db::name('category')->where([['parentid','=',0],['ismenu','=',1]])->order('sort')->select();
            $column_two = Db::name('category')->where('ismenu',1)->order('sort')->select();
			//print_r($column_two);die;
            $tree = new Leftnav ();
            $cate = $tree->index_top($column_one,$column_two);		
            cache('cate', $cate, 3600);
        }
        $this->assign('category',$cate);
        //服务范围
		$ranges_lists = db('ranges')->where(array('open'=>1))->order('sort asc,addtime desc')->limit('10')->select();
		$this->assign('ranges_lists',$ranges_lists);
        $this->assign('adList', $adList);	 
    }
    public function _empty(){
        return $this->error('空操作，返回上次访问页面中...');
    }
}