import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import {
    AboutPage,
    ContactPage,
    Footer,
    Header,
    HomePage,
    SkillPage
} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div className="main-content-container">
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/skills" component={SkillPage} />
                    <Route path="/contact" component={ContactPage} />
                </Switch>
            </div>
        </div>
        <div>
            <Footer />
        </div>

    </BrowserRouter>

)

export default AppRouter;