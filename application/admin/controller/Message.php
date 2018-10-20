<?php
namespace app\admin\controller;
use think\Db;
use think\facade\Request;
class Message extends Common
{
    public function index(){
        if(request()->isPost()) {
            $key=input('post.key');
            $page =input('page')?input('page'):1;
            $pageSize =input('limit')?input('limit'):config('pageSize');
            $list = db('message')
                ->where('name|tel|content', 'like', "%" . $key . "%")
                ->order('addtime desc')
                ->paginate(array('list_rows'=>$pageSize,'page'=>$page))
                ->toArray();
            foreach ($list['data'] as $k=>$v){
                $list['data'][$k]['addtime'] = date('Y-m-d H:s',$v['addtime']);
            }
            return $result = ['code'=>0,'msg'=>'获取成功!','data'=>$list['data'],'count'=>$list['total'],'rel'=>1];
        }
        return $this->fetch();
    }
    public function add(){
        if(Request::isAjax()) {
            //构建数组
            $data = Request::except('file');
            $data['addtime'] = time();
            db('message')->insert($data);
            $result['code'] = 1;
            $result['msg'] = '广告添加成功!';
            $result['url'] = url('index');
            return $result;
        }else{
          
            return $this->fetch('form');
        }
    }
    public function edit(){
        if(Request::isAjax()) {
            $data = Request::except('file');
            db('message')->update($data);
            $result['code'] = 1;
			 $result['msg'] = '修改成功!';
            $result['url'] = url('index');
            return $result;
        }else{
            $id=input('id');
            $adInfo=db('message')->where(array('id'=>$id))->find();
            $this->assign('info',json_encode($adInfo,true));
            $this->assign('title',lang('edit')."留言");
            return $this->fetch('form');
        }
    }	
	
//回复	
	    public function addmsg(){
        if(Request::isAjax()) {
            $data = Request::except('file');
            db('message')->update($data);
            $result['code'] = 1;
            $result['msg'] = '回复成功!';
            $result['url'] = url('index');
            return $result;
        }else{
            $id=input('id');
            $adInfo=db('message')->where(array('id'=>$id))->find();
            $this->assign('info',json_encode($adInfo,true));
            $this->assign('title',lang('edit')."案例");
            return $this->fetch('form');
        }
    }
    //设置广告状态
    public function editState(){
        $id=input('post.id');
        $open=input('post.open');
        if(db('message')->where('id='.$id)->update(['open'=>$open])!==false){
            return ['code'=>1,'msg'=>'设置成功!'];
        }else{
            return ['code'=>0,'msg'=>'设置失败!'];
        }
    }	
    //删除留言
    public function del(){
        $map['id']=input('id');
        db('message')->where($map)->delete();
        return $result = ['code'=>1,'msg'=>'删除成功!'];
    }
    public function delall(){
        $map[] =array('id','IN',input('param.ids/a'));
        db('message')->where($map)->delete();
        $result['msg'] = '删除成功！';
        $result['code'] = 1;
        $result['url'] = url('index');
        return $result;
    }
}