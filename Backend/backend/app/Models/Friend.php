<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    use HasFactory;
    //protected $fillable = ['name'];
    protected $fillable = [];
    public function users(){
        return $this->belongsToMany(User::class, 'friend_user', 'user_id', 'friend_id');
    }
    public function messages(){
        return $this->hasMany(Message::class); 
    }
}
