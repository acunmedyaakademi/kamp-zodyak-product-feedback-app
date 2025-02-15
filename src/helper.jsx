import FeedbackDetail from "./assets/component/FeedbackDetail"
import Home from "./assets/component/Home"
import NewFeedback from "./assets/component/NewFeedback"
import Roadmap from "./assets/component/Roadmap"
import EditFeedback from "./assets/component/EditFeedback"

const routers = [
    {
        url:"/",
        component:<Home />
    },
    {
        url:"/feedback-detail",
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
    return routers.findLast(router => url.startsWith(router.url)) ?? <h1>404 NOT FOUND!</h1>
}