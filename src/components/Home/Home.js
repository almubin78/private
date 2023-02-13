import React from 'react';
import Navigation from '../Navigation/Navigation';
import WhatYouLearn from '../whatYouLearn/WhatYouLearn';
import WhyMe from '../WhyMe/WhyMe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <WhyMe></WhyMe>
            <WhatYouLearn></WhatYouLearn>
        </div>
    );
};

export default Home;