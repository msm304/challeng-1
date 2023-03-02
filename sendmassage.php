<?php

if(isset($_POST['name']) && !empty($_POST['name'])){
    // send massage
    echo json_encode([
        'success' => true,
        'msg' => 'پیام شما با موفقیت برای مدیر سایت ارسال شد',
        'status' => 200
    ]);
}else{

    echo json_encode([
        'success' => false,
        'msg' => 'پیام شما ارسال نشد لطفا مجددا تلاسش کنید',
        'status' => 200
    ]);

}