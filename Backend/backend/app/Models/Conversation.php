<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;
    protected $fillable = [];
    public function messages(){
        return $this->belongsToMany(Message::class);
    }
    public function users(){
        return $this->belongsToMany(User::class);
    }
}
