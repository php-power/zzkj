<?php
namespace app\admin\controller;
use think\Db;
use think\facade\Request;
class News extends Common
{
    public function index(){
        if(Request::isAjax()) {
            $key = input('post.key');
            $this->assign('testkey', $key);
            $page =input('page')?input('page'):1;
            $pageSize =input('limit')?input('limit'):config('pageSize');
            $list = Db::table(config('database.prefix') . 'news')
                ->where('title|content', 'like', "%" . $key . "%")
                ->order('sort asc,id desc')
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
            db('news')->insert($data);
            $result['code'] = 1;
            $result['msg'] = '添加成功!';
            $result['url'] = url('index');
            return $result;
        }else{
           $this->assign('info','null');
            return $this->fetch('form');
        }
    }
    public function edit(){
        if(Request::isAjax()) {
            $data = Request::except('file');
            db('news')->update($data);
            $result['code'] = 1;
			 $result['msg'] = '修改成功!';
            $result['url'] = url('index');
            return $result;
        }else{
            $id=input('id');
            $adInfo=db('news')->where(array('id'=>$id))->find();
            $this->assign('info',json_encode($adInfo,true));
            $this->assign('title',lang('edit')."动态");
            return $this->fetch('form');
        }
    }
    //设置广告状态
    public function editState(){
        $id=input('post.id');
        $open=input('post.open');
        if(db('news')->where('id='.$id)->update(['open'=>$open])!==false){
            return ['status'=>1,'msg'=>'设置成功!'];
        }else{
            return ['status'=>0,'msg'=>'设置失败!'];
        }
    }
    //设置广告状态
    public function editTj(){
        $id=input('post.id');
        $open=input('post.is_tj');
        if(db('news')->where('id='.$id)->update(['is_tj'=>$open])!==false){
            return ['status'=>1,'msg'=>'设置成功!'];
        }else{
            return ['status'=>0,'msg'=>'设置失败!'];
        }
    }		
    public function adOrder(){
        $ad=db('news');
        $data = input('post.');
        if($ad->update($data)!==false){
            return $result = ['msg' => '操作成功！','url'=>url('index'), 'code' =>1];
        }else{
            return $result = ['code'=>0,'msg'=>'操作失败！'];
        }
    }
    public function del(){
        db('news')->where(array('id'=>input('id')))->delete();
      
        return ['code'=>1,'msg'=>'删除成功！'];
    }
    public function delall(){
        $map[] =array('id','in',input('param.ids/a'));
        db('news')->where($map)->delete();
        $result['msg'] = '删除成功！';
        $result['code'] = 1;
        $result['url'] = url('index');
        return $result;
    }
	
}