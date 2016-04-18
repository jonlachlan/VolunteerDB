# VolunteerDB

Tools for collecting and search volunteer information so that campaign coordinators can assemble teams.

## Getting Started

(If you are going to be contributing code, please see the instructions for Contributing below).

To prepare the environment, clone the repo on your local machine and then in the terminal:

```
cd /path/to/VolunteerDB
npm install
```

Then, to run the app locally:

```
meteor
```

Once the app is running go to your browser at [localhost:3000](localhost:3000)

If you do not have meteor installed, go to [meteor.com/install](meteor.com/install).

All of the UI components have stories for React Storybook, a tool for browsing UI components with mock state data. To run the Storybook:

```
npm run storybook
```

and open your browser at [http://localhost:9001/](http://localhost:9001/)

## Contributing

### GitHub

Please fork the project to your personal repo and clone it on your local machine. Then in terminal:

1. `git pull --rebase` to catch up your local git from the main organization repo.
1. Push to your own repo in the `master` branch
1. Submit a pull request to the main organization repo


## Technology stack

This is a Mantra application, which is an application architecture for the [Meteor](meteor.com) platform using [React](reactjs.com) for the UI layer. It uses a modular design, with a focus on maintainability and separation between UI and state management. Please see the Mantra specification at [https://kadirahq.github.io/mantra/](https://kadirahq.github.io/mantra/).
