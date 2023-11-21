<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = session('user');
        return view('user',['user'=>$user]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'firstname'=>'string|max:255|required',
            'lastname'=>'string|max:255|required',
            'email'=>'email|string|required|max:255|unique:users',
            'password'=>'string|required|min:8|max:25',
            'confirmed'=>'string|required|min:8|max:25|same:password'
        ]);
        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->errors()
            ],400);
        }
        $user = new User([
            'firstname'=>$request->firstname,
            'lastname'=>$request->lastname,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'confirmed'=>$request->confirmed,
        ]);
        $user->save();
        return response()->json([
            'message' => 'utilisateur enregistre avec succes'
        ],201);
    }
    public function login(){
        $credentials = request(['email', 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Password or email is uncorrect'], 401);
        }
        $user = auth()->user(); // recuperer l'utilisateur authentifie
        $token = $user->createToken('token')->accessToken;
        $user->remember_token = $token;  // stocker le token dans la table user dans le champ remember_token
        $user->save();
        return response()->json(['token' => $token, 'message' => 'user authentifie','user'=>$user]);
    }
    public function find(Request $request) {
        $token = $request->token;
        $user = User::where('remember_token',$token)->first();
        if(!$user){
            return response()->json(["error"=>"token ne correspond a aucun user"]);
        }
        return $user;
    }
    public function search(Request $request){
        $searchTerm = $request->input('search');  // La valeur saisit dans le champ de recherche et envoye dans la requette vers l'API
        //$searchTerm = $request->search;
        $users = User::where('firstname','like','%'.$searchTerm.'%')->take(8)->get(); // Les 8 premiers resultats de recherche qui correspondent aux users dont le nom comportant le terme de recherche
        $useres = array();
        foreach($users as $user){
            $friends = $user->friends;
            $nbrefriends = count($friends);
            $usere = $user; 
            $usere->nbrefriend = $nbrefriends;
            array_push($useres,$usere);
        }
        return response()->json($useres); // renvoyer les resultats de recherche sous format JSON
    }
    /*public function forget(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'email|string|required|max:255'
        ]);
        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->errors()
            ],400);
        }
        $email = $request->email;
        $user = User::where('email',$email)->first();
        if(!$user){
            return response()->json([
                'errors'=>"This email doesn't exist"
            ],400);
        }
        return $email;
    }*/
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
