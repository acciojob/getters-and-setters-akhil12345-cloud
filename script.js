//complete this code
class Person {
	constructor(name,age){
		this._name=name,
		this._age=age
	}
		get name(){
			return this._name
		}
		set age(newAge){
			this._age=newAge
		}
	
}

class Student extends Person {
	constructor(name,age,study){
		super(name,age)
		this._study=study
	}
	study(){
		return this.name+" is studying"
	}
}

class Teacher extends Person {
	constructor(name,age,teach){
		super(name,age)
		this._teach=teach
	}
	teach(){
		return this.name+" is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
