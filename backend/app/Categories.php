<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    //
    public $fillable = ['code','title','description','createDate', 'updateDate' ,'idParentCategory'];

    public $timestamps = false;


    public function childs(){
        return $this->hasMany('App\Categories','idParentCategory','id') ;
    }
}
