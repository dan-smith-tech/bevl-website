import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteName } from "../components/layout";
import helpStyles from "../styles/help.module.css";

//Font Awesome (icons)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPalette, faPen, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Help() {
	return (
		<Layout>
			<Head>
				<title>Help | {siteName}</title>
			</Head>
			<div className={helpStyles.containerMain}>
				<Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
				<Link href="/signup">
					<a draggable="false" className="button buttonPrimary">
						Sign Up For Alpha
					</a>
				</Link>
				<a href="https://feedback.bevl.app/roadmap" target="_blank" rel="noopener noreferrer" draggable="false" className="button buttonSecondary">
					View Roadmap
				</a>
				<a href="https://feedback.bevl.app/" target="_blank" rel="noopener noreferrer" draggable="false" className="button buttonSecondary">
					Provide Feedback
				</a>
				<div className={helpStyles.helpContainer}>
					<section className={helpStyles.helpSection}>
						{/* About */}
						<h2 id="labels" className={helpStyles.helpSectionHeading}>
							What is Bevl?
						</h2>
						<p className={helpStyles.helpSectionDescription}>
							<em>Bevl</em> is a simple, personal, productivity tool that allows you to spend less time making plans, and more time acting upon them. It is based upon my philosophy of finding a balance between specificity and
							generality when organising your time.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							I believe an effective plan is accurate enough to guide you, but not so precise that it dictates every moment of your life. If you include too much detail, then you will never be able to realistically stick to your
							goals and will spend more time revising your plans than actually carrying them out. This is bad for both productivity and mental health.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							<em>Bevl</em> allows you to set clear, concise, goals by keeping track of the tasks you need to get done through intuitive interaction that allows you to project-manage your life quickly and efficiently.{" "}
							<em>Bevl</em> defines the start of a week as the current day, so that you can plan out the next 14 days.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							Explore the list of features below in order to learn how <em>Bevl</em> works.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							<em>
								Please note that Bevl is in very early stages of development. Not only are there many more features coming soon (see the{" "}
								<a draggable="false" href="https://feedback.bevl.app/roadmap" target="_blank" rel="noopener noreferrer">
									roadmap
								</a>
								), but many of the existing features will be improved and built upon. Whilst testing, if you encounter any issues or have any unique ideas, please leave feedback{" "}
								<a draggable="false" href="https://feedback.bevl.app" target="_blank" rel="noopener noreferrer">
									here
								</a>
								.
							</em>
						</p>

						{/* Labels */}
						<h2 id="labels" className={helpStyles.helpSectionHeading}>
							Labels
						</h2>
						<p className={helpStyles.helpSectionDescription}>Labels allow you to organise your tasks by grouping them together.</p>
						<p className={helpStyles.helpSectionDescription}>
							NOTE: When you create an account, a default label named &apos;General&apos; is created. See{" "}
							<Link href="#creating-labels">
								<a draggable="false">Creating Labels</a>
							</Link>{" "}
							and{" "}
							<Link href="#default-labels">
								<a draggable="false">Default Labels</a>
							</Link>{" "}
							in order to replace this.
						</p>

						<h3 id="creating-labels" className={helpStyles.helpSectionSubHeading}>
							Creating Labels
						</h3>
						<p className={helpStyles.helpSectionDescription}>You can create new labels in order to group tasks together. You can also replace the default label, should you wish to.</p>
						<p className={helpStyles.helpSectionDescription}>
							To add a new label, go to <em>Settings : Labels</em> and enter the name of the label in the input field, and press either &apos;Enter&apos; on your keyboard, or the &apos;Add Label&apos; UI button. You will see
							this new label appear in the list of labels.
						</p>

						<h3 id="coloring-labels" className={helpStyles.helpSectionSubHeading}>
							Coloring Labels
						</h3>
						<p className={helpStyles.helpSectionDescription}>Coloring labels allows assigned tasks to appear the same color, offering visual organisational capabilities.</p>
						<p className={helpStyles.helpSectionDescription}>
							To change the color of a label, go to <em>Settings : Labels</em> and press the <FontAwesomeIcon icon={faPalette} /> icon on the label you want to change the color of. A context menu featuring 12 colors will then
							appear. Selecting one of these colors will change the color of this label.
						</p>

						<h3 id="naming-labels" className={helpStyles.helpSectionSubHeading}>
							Changing the Names of a Labels
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							<em>Coming soon...</em>
						</p>

						<h3 id="default-labels" className={helpStyles.helpSectionSubHeading}>
							Default Labels
						</h3>
						<p className={helpStyles.helpSectionDescription}>Your default label should be the label you most commonly use, as it is the label that is pre-selected whenever you create a new task.</p>
						<p className={helpStyles.helpSectionDescription}>
							To change your default label, go to <em>Settings : Labels</em> and press the <FontAwesomeIcon icon={faStar} /> icon on the label you want to make the new default. This will replace the previous default.
						</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: You must always have a default label, and only one label can be the default. If you delete the default label, then it will automatically change to another.</p>

						<h3 id="deleting-labels" className={helpStyles.helpSectionSubHeading}>
							Deleting Labels
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							To delete a label, go to <em>Settings : Labels</em> and press the <FontAwesomeIcon icon={faTrash} /> icon on the label you want to delete.
						</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: You must always have at least one label.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: If this was your default label, then another label will be selected as the default.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: Deleting a label will delete all of its associated tasks.</p>

						{/* Tasks */}
						<h2 id="tasks" className={helpStyles.helpSectionHeading}>
							Tasks
						</h2>
						<p className={helpStyles.helpSectionDescription}>
							There are two types of tasks that you can create:{" "}
							<Link href="#deadlines">
								<a draggable="false">Deadlines</a>
							</Link>{" "}
							and{" "}
							<Link href="#events">
								<a draggable="false">Events</a>
							</Link>
							.
						</p>

						<h3 id="task-components" className={helpStyles.helpSectionSubHeading}>
							Components of a Task
						</h3>
						<p className={helpStyles.helpSectionDescription}>All types of tasks (Deadlines and Events) have the same 5 components. They are the following:</p>

						<h4 id="task-components-name" className={helpStyles.helpSectionSubHeadingSmall}>
							Name
						</h4>
						<p className={helpStyles.helpSectionDescription}>This is the name of the task, which will show up when it is plotted on the calendar and when it appears in the Task list.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field is required.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field has a character limit of 35.</p>

						<h4 id="task-components-notes" className={helpStyles.helpSectionSubHeadingSmall}>
							Notes
						</h4>
						<p className={helpStyles.helpSectionDescription}>This is a place for you to write more extensive information about the task you are adding.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field is not required.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field has a character limit of 250.</p>

						<h4 id="task-components-type" className={helpStyles.helpSectionSubHeadingSmall}>
							Type
						</h4>
						<p className={helpStyles.helpSectionDescription}>There are (currently) 2 types of tasks: Deadlines and Events. See below for an explanation of each.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field is required.</p>

						<h4 id="task-components-label" className={helpStyles.helpSectionSubHeadingSmall}>
							Label
						</h4>
						<p className={helpStyles.helpSectionDescription}>You can assign one of your created labels.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field is required.</p>

						<h4 id="task-components-date" className={helpStyles.helpSectionSubHeadingSmall}>
							Date
						</h4>
						<p className={helpStyles.helpSectionDescription}>This is the date the task is due (or occurs on).</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: This field is required.</p>

						<h3 id="creating-tasks" className={helpStyles.helpSectionSubHeading}>
							Creating Tasks
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							Go to <em>Dashboard</em> and press &apos;Add Task&apos;. Enter the information into the relevant fields and press &apos;Add Task&apos;.
						</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: Type, Label, and Date all have default values, in order to reduce the time it takes to add a task.</p>

						<h3 id="editing-tasks" className={helpStyles.helpSectionSubHeading}>
							Editing Tasks
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							Go to <em>Dashboard</em> and click on the task you want to edit in the Task list. Change the information in the relevant fields and press &apos;Update Task&apos;.
						</p>

						<h3 id="deleting-tasks" className={helpStyles.helpSectionSubHeading}>
							Deleting Tasks{" "}
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							Go to <em>Dashboard</em> and click on the task you want to delete in the Task list. Press &apos;Delete Task&apos;.
						</p>

						<h3 id="completing-tasks" className={helpStyles.helpSectionSubHeading}>
							Completing Tasks
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							Completed tasks are marked as complete in the task list and disappear once their deadline has passed. Hovering over a task in the Task list will reveal a button with the <FontAwesomeIcon icon={faCircleCheck} />{" "}
							icon that, when pressed, sets the task as complete. If this button is pressed when a task is already complete, the task will no longer be marked as complete.
						</p>

						<h3 id="deadlines" className={helpStyles.helpSectionSubHeading}>
							Deadlines
						</h3>
						<p className={helpStyles.helpSectionDescription}>
							Deadlines allow you to assign a final deadline to a task, but can be dragged into the calendar in order to plan when the task will be worked on. See{" "}
							<Link href="#deadline-plans">
								<a draggable="false">Deadline Plans</a>
							</Link>{" "}
							for more details.
						</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: Deadline is the pre-selected task type, as it is the most common.</p>

						<h4 id="deadline-plans" className={helpStyles.helpSectionSubHeadingSmall}>
							Deadline Plans
						</h4>
						<p className={helpStyles.helpSectionDescription}>Deadline Plans allow you to organise when you will work on and prepare for the associated Deadline, without having to edit or change the Deadline itself.</p>
						<p className={helpStyles.helpSectionDescription}>
							Dragging a Deadline from the Task list onto a day in the calendar will create a plan for this Deadline (it can be dragged from the task list onto as many days as you want to work on it), and you can drag existing
							Deadline Plans onto other days in the calendar to change their date.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							Like Deadlines, Deadline Plans can also be completed and deleted. Hover over a Deadline Plan, and press the <FontAwesomeIcon icon={faTrash} /> icon to delete it, and the <FontAwesomeIcon icon={faCircleCheck} />{" "}
							icon to complete it.
						</p>

						<h3 id="events" className={helpStyles.helpSectionSubHeading}>
							Events
						</h3>
						<p className={helpStyles.helpSectionDescription}>Events are tasks that only occur once. They do not require planning/preparation. For example, a birthday or medical appointment.</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
