class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      {this.props.list.map((question, index) => {
        return <div key={index}>
          <p>{question.title}</p>
          <a href={question.link} target='_blank'>{question.link}</a>
        </div>;
      })}
    </div>;
  }
}
