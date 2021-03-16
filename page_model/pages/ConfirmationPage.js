import { Selector, t}  from 'testcafe'
class ConfirmationPage{
constructor(){
    this.finishLabel = Selector('.subheader')
}

}

export default new ConfirmationPage()