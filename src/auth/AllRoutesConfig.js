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
import LearnView1 from "../views/LearnView1";
import LearnView3 from "../views/LearnView3";
import LearnView2 from "../views/LearnView2";
import ExamDetails from "../views/components/ExamDetails";
import TakingExam from "../views/TakingExam";

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
    },
    {
        component: LearnView1,
        path: '/courses/learn1/:id',
        title: 'LearnView1',
        exact: true
    },
    {
        component: LearnView2,
        path: '/courses/learn2/:id',
        title: 'LearnView2',
        exact: true
    },
    {
        component: LearnView3,
        path: '/courses/learn3/:id',
        title: 'LearnView3',
        exact: true
    },
    {
        component: ExamDetails,
        path: '/exams/:id',
        title: 'ExamDetails',
        exact: true
    },
    {
        component: TakingExam,
        path: '/exams/start/:id',
        title: 'TakingExam',
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