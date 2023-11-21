<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{
    public function add(Request $request, User $user){
        $currentUser = auth()->user();
        //return $currentUser;
        if(!$currentUser){
            //return response()->json(["message"=>"Friend added with success"]);
            return response()->json(["error"=>"unauthorized"],401);
        }
        $currentUser->friends()->attach($user);
        return response()->json(["message"=>"ami ajoute avec succes"]);
        //return $request;
    }
}
