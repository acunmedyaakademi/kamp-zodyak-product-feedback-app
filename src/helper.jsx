import FeedbackDetail from "./component/FeedbackDetail"
import FeedbackDetail from "./component/Home"
import FeedbackDetail from "./component/NewFeedback"
import FeedbackDetail from "./component/Roadmap"
import FeedbackDetail from "./component/EditFeedback"

const routers = [
    {
        url:"/",
        component:<Home />
    },
    {
        url:"/feedback/detail",
        component:<FeedbackDetail />
    },
    {
        url:"/new-feedback",
        component:<NewFeedback />
    },
    {
        url:"/roadmap",
        component:<Roadmap />
    },
    {
        url:"/edit-feedback",
        component:<EditFeedback />
    }

]

export function getPage(url) {
    return routers.find((router) => router.url === url) ?? <h1>404 NOT FOUND!</h1>
}