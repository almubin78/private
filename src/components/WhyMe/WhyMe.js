import React from 'react';
import './whyme.css'
const WhyMe = () => {
    return (
        <div className='container my-5'>
            <h3 className='text-center fw-bold'>Why Me ?</h3>
            <hr className='mx-auto' />
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-6'>
                    <li className='list shadow p-3 mb-3 bg-body rounded'><span className='fs-2 text-uppercase'>তোমাকে বুঝাঃ</span> আমি মুলত যখন ৯ম শ্রেণির ছাত্র ছিলাম তখন থেকে অন্যকে শেখাতে পছন্দ করতাম। সেই সুবাদে একেকজন student এর সমস্যার মুলে প্রবেশ করার জ্ঞানটা আয়ত্ব করতে পেরেছি (ইয়ে মানে! মিথ্যা কথা নয় কিন্তু)। </li>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-6'>
                    <li className='list shadow p-3 mb-3 bg-body rounded'><span className='fs-2 text-uppercase'>অভিজ্ঞতাঃ</span> আমি কয়েকটি স্বনামধন্য প্রতিষ্ঠানে দীর্ঘদিন শিক্ষকতার পেশায় নিজেকে জড়িয়ে রেখেছিলাম। এদের মধ্যে-
                        <ol class="list-group list-group-numbered mt-3">
                            <li class="list-group-item">Merit Care Coaching Center,Gaibandha</li>
                            <li class="list-group-item">Success Model School, Nakaihat</li>
                            <li class="list-group-item">The Best Private Home, Nakaihat</li>
                        </ol>
                        উল্লেখযোগ্য।
                    </li>
                </div>


            </div>
        </div>
    );
};

export default WhyMe;