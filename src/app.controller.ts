import { Controller,Get } from "@nestjs/common";

//prefix : di browser harus localhost:3000/app/home
@Controller('App')
export class AppController{
    @Get('/home')

    getRootRoute(){
        return "this home page"
    }

    //membuat controller atau halaman baru
    @Get('contact')
    getContact(){
        return 'this contact'
    }
}