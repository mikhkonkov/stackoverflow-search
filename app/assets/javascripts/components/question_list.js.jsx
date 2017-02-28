class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      {this.props.list.map((question, index) => {
        return <div key={index} className="row">
          <div className="small-12 columns">
            <a href={question.link} target='_blank'>{question.link}</a>
            <p>{question.title}</p>
          </div>
        </div>;
      })}
    </div>;
  }
}
