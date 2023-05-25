const Header = ({ name }) => (
  <h1>{name}</h1>
);

const Part = ({ part }) => (
  <p>{part.name} {part.exercises}</p>
);

const Content = ({ parts }) => {
  const partsList = parts.map(part => (
    <Part
      key={part.id}
      part={part}
    />
  ));

  return (
    <div>
      {partsList}
    </div>
  );
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p><b>total of {total} exercises</b></p>
  );
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;