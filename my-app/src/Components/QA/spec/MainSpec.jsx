//it should render a Search Component

//it should render a QuestionList component if product questions exist

import Main from '../Main.jsx';

describe('Main', function() {

 beforeEach(function() {
    app = renderIntoDocument(<Wrapper><Main/></Wrapper>)
  );
})

it('should render a Search component', function() {
  var Search = findRenderedDOMComponentWithClass(app, 'search');
  expect(Search).to.exist;
})

it('should render a QuestionList component if product questions exist', function() {
  expect(QuestionList).to.exist;
})

}