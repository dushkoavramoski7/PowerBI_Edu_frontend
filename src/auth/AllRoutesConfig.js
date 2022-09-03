import {Route, Switch} from 'react-router-dom';
import CoursesView from "../views/CoursesView";
import LearningPathView from "../views/LearningPathView";
import ExamView from "../views/ExamView";
import DaxFunctionsView from "../views/DaxFunctionsView";
import DocumentationsView from "../views/DocumentationsView";
import NewsView from "../views/NewsView";
import CommunityView from "../views/CommunityView";
import InfluencersView from "../views/InfluencersView";
import CourseDetails from "../views/components/CourseDetails";

export const routesConfig = [
    {
        component: CoursesView,
        path: '/courses',
        title: 'CoursesView',
        exact: true
    },
    {
        component: LearningPathView,
        path: '/learningPath',
        title: 'LearningPathView',
        exact: true
    },
    {
        component: ExamView,
        path: '/exams',
        title: 'ExamView',
        exact: true
    },
    {
        component: DaxFunctionsView,
        path: '/DAXFunctions',
        title: 'DaxFunctionsView',
        exact: true
    },
    {
        component: DocumentationsView,
        path: '/documentations',
        title: 'DocumentationsView',
        exact: true
    },
    {
        component: NewsView,
        path: '/news',
        title: 'NewsView',
        exact: true
    },
    {
        component: CommunityView,
        path: '/community',
        title: 'CommunityView',
        exact: true
    },
    {
        component: InfluencersView,
        path: '/influencers',
        title: 'InfluencersView',
        exact: true
    },
    {
        component: CourseDetails,
        path: '/courses/:id',
        title: 'CourseDetailsView',
        exact: true
    }
]

const AllRoutes = () => {
    return (
        <Switch>
            {
                routesConfig.map(route =>
                    <Route key={route.path} path={route.path} exact component={route.component} />
                )
            }
        </Switch>
    )
}

export default AllRoutes;