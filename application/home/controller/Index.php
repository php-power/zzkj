<?php
namespace app\home\controller;
use clt\Lunar;
class Index extends Common{
    public function initialize(){
        parent::initialize();
    }
	//isMobile返回true为手机
    public function index(){
        $order = input('order','addtime');//主页打印为createtime
        $productList=db('product')
			->where(['open'=>0])
            ->order('sort desc,id desc')
            ->limit(11)
            ->select();
        foreach ($productList as $k=>$v){
			$productList[$k]['title']=str_cut($v['title'],20,"...");
            $productList[$k]['url'] = url('home/'.$v['catdir'].'/info',array('id'=>$v['id'],'catId'=>$v['catid']));
        }
        $this->assign('productList', $productList);
		//新闻
		$news_list = db('news')->where(array('open'=>1))->order('sort asc,id desc')->limit(5)->select();
			//产品中心
		$product_list = db('product')->where(array('open'=>1))->order('sort asc,id desc')->limit('6')->select();
		$this->assign('product_list',$product_list);
		$partner_list = db('partner')->where(array('open'=>1))->order('sort asc,id desc')->limit(15)->select();
		$this->assign('partner_list',$partner_list);
		$this->assign('news_list',$news_list);
        return $this->fetch();
    }
    public function senmsg(){
		if(request()->isPost()) {
        $data = input('post.');
        $data['addtime'] = time();
        $data['ip'] = getIp();
        $id=db('message')->insertGetId($data);  
		$tel=input('post.tel');
		$name=input('post.name');
		$content=input('post.content');
		$arr = db('config')->where('inc_type','smtp')->select();
        $config = convert_arr_kv($arr,'name','value');
		$sender=$config['test_eamil'];
        $content = "来自指掌官网的新消息.消息编号: $id,客户姓名：$name ,联系方式：$tel,留言：$content";
        $send = send_email($sender, '官网留言',$content);
			if($id){
				return ['code'=>1,'msg'=>'留言成功!马上就联系您'];
			}else{
				return ['code'=>0,'msg'=>'留言失败，请重新尝试'];
			}
		}
    }	
	   public function productlist(){
				//$map['type_name']=$type_namess;
				$map['open']=1;
		        $list=db('product')
                    ->where($map)
                    ->order('sort,id desc')
                    ->paginate(6);
               // 获取分页显示	
                $page = $list->render();
				$list = $list->toArray();
				foreach ($list['data']  as $k=>$v){
                 $list['data'][$k]['addtime'] = date('Y-m-d H:s',$v['addtime']);
				 
                }
				$this->assign('list',$list['data']);
                $this->assign('page',$page);	
				
        return $this->fetch();
    }	
	   public function productdetail(){		
		    $id=input('id');
			$one=db('product')->where('id',$id)->find();
			$one['addtime']=date('Y-m-d H:i',$one['addtime']);
            $this->assign('one',$one);	
			return $this->fetch();
    }
	   public function detail(){		
		    $id=input('id');
			$one=db('product')->where('id',$id)->find();
			$one['addtime']=date('Y-m-d H:i',$one['addtime']);
            $this->assign('one',$one);	
			return $this->fetch();
    }
	   public function newslist(){
				//$map['type_name']=$type_namess;
				$map['open']=1;
		        $list=db('news')
                    ->where($map)
                    ->order('sort,id desc')
                    ->paginate(6);
               // 获取分页显示	
                $page = $list->render();
				$list = $list->toArray();
				foreach ($list['data']  as $k=>$v){
                 $list['data'][$k]['addtime'] = date('Y-m-d H:s',$v['addtime']);
				 
                }
				$this->assign('list',$list['data']);
                $this->assign('page',$page);	
				
        return $this->fetch();
    }	
	   public function newsdetail(){		
		    $id=input('id');
			$one=db('news')->where('id',$id)->find();
			$one['addtime']=date('Y-m-d H:i',$one['addtime']);
            $this->assign('one',$one);	
			return $this->fetch();
    }
	   public function detailnews(){		
		    $id=input('id');
			$one=db('news')->where('id',$id)->find();
			$one['addtime']=date('Y-m-d H:i',$one['addtime']);
            $this->assign('one',$one);	
			return $this->fetch();
    }	
}