<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    function index()
    {
      $data =array(
        ["id"=>1,"productTitle"=>"Galletas artesanales CanAmor","price"=>3904,"img"=>"https://laikapp.s3.amazonaws.com/images_products/967_GALLETAS_ARTESANALES_CANAMOR_236X379.PNG", "offer"=>true,"ammountOffer"=>"15%"],
        ["id"=>2,"productTitle"=>"Baño espumoso","price"=>14600,"img"=>"https://laikapp.s3.amazonaws.com/dev_images_products/27994_Ba__o_Espumoso_CanAmor_Repelente___rbol_De_T___1611862132_500x500.png"],
        ["id"=>3,"productTitle"=>"Spray CanAmor","price"=>12600,"img"=>"https://laikapp.s3.amazonaws.com/dev_images_products/27998_Spray_CanAmor___rbol_De_T___1611862892_500x500.png","offer"=>true,"ammountOffer"=>"20%"],
        ["id"=>4,"productTitle"=>"Ringo Croquetas","price"=>57100,"img"=>"https://s3.us-east-1.amazonaws.com/laikapp/images_products/99346b7c2a33b3d7886aec3eafb1f65b.png"],
        ["id"=>5,"productTitle"=>"Evolve Dog Lata Pavo","price"=>11800,"img"=>"https://laikapp.s3.amazonaws.com/images_products/2681_Evolve_Dog_%2ALata_Pavo_676X676.png"],
        ["id"=>6,"productTitle"=>"Pote Chunky Delidog Trozos Pollo","price"=>4600,"img"=>"https://s3.us-east-1.amazonaws.com/laikapp/images_products/335a55360145c1e46aaaee39301c41be.png","offer"=>true,"ammountOffer"=>"35%"],
        ["id"=>7,"productTitle"=>"Br For Dog Wild Adulto","price"=>65800,"img"=>"https://s3.us-east-1.amazonaws.com/laikapp/images_products/1_3202_BR_FOR_DOG_WILD_ADULTO___300X424.jpg"],
        ["id"=>8,"productTitle"=>"Agility Gold Piel Pequeños Adultos","price"=>28400,"img"=>"https://s3.us-east-1.amazonaws.com/laikapp/images_products/ed8e64a84c8278cba49a73b4221ea504.png"],
        ["id"=>9,"productTitle"=>"Eukanuba Cachorro Cordero Y Arroz","price"=>181900,"img"=>"https://laikapp.s3.amazonaws.com/dev_images_products/1330_61801_Eukanuba_Cachorro_Cordero_Y_Arroz_1616612124_2400x2400.jpg","offer"=>true,"ammountOffer"=>"10%"],
      );             
        return $data;
    }
}
