<p align="center">
  <img width="400" src="https://drive.google.com/uc?export=view&id=19Wt0zKE2XZ-K8R-4uC5ZZBE25b-mrxak">
</p>

# Venera AI - Landing Page

This project is used to create the landing page for Venera AI Healthcare. At Venera AI, we're dedicated to transforming healthcare with cutting-edge AI technologies. The landing page shows public information such as our work, team, and vision for the future of healthcare

- [Key Objectives](#key-objectives)
- [Project Structure](#project-structure)
  - [Versioning](#versioning)
  - [Project Language and Platform](#project-language-and-platform)
  - [Project Architecture](#project-architecture)
    - [Component/View Structure](#component/view-structure)
    - [React and Redux](#react-and-redux)
    - [Data Fetching](#data-fetching)
    - [Styling](#styling)
    - [Time](#time)
    - [Other](#other)
    - [Metrics](#metrics)
    - [Alerts and Logging](#alerts-and-logging)
- [Running and Testing](#running-and-testing)
  - [Logging in for the First Time](#logging-in-for-the-first-time)
  - [Feature Work](#feature-work)
  - [Testing](#testing)
- [Deployment and Releases](#deployment-and-releases)
- [Troubleshooting](#troubleshooting)
- [Service Maintainers](#service-maintainers)

## Project Structure

### Project Language and Platform

This project was bootstrapped using [Astro](https://astro.build/). If you're new to Astro, please go through this short tutorial: [Build your first Astro Blog | Docs](https://docs.astro.build/en/tutorial/0-introduction/). It will teach you most of the things needed for the project. If you're interested, also give this a read to find out why Astro is an awesome tool for building modern website: [Why Astro? | Docs](https://docs.astro.build/en/concepts/why-astro/)

For CSS, we use [Tailwind](https://tailwindcss.com/). Tailwind CSS is a tiny, utility first CSS framework for building custom designs, without the context switching that regular CSS requires. It is purely a CSS framework and does not provide any pre-built components or logic, and provides a very different set of benefits↗ compared to a component library like Material UI.

By the way, besides the static components built with Astro, for dynamic Islands, we use React.

Other than that, even though the project is very simple, we advise you using Typescript. Whether you’re a new or seasoned developer, we think that TypeScript is a must have. It can look intimidating at first, but much like a lot of tools, is something that many never look back from after starting to use it. You can watch the followings in order to learn more about Typescript:

- [Typescript Intro](https://www.totaltypescript.com/tutorials/beginners-typescript)
- [Typescript with React](https://www.totaltypescript.com/tutorials/react-with-typescript)

### Project Architecture

You'll find the following directories and files, logically grouping common assets. You'll see something like this:

```
├── public/                # static files (favicons are in here)
│
├── src/                   # project root
│   ├── components/        # reusable components
│   ├── images/            # images to be used within the project
│   ├── layouts/           # layouts components that should appear on every page, such as navbars
│   ├── pages              # corresponds to the pages. We currently only have 1 pages, but this could be changed.
│

```

### Metrics

We are currently NOT tracking any metrics.

### Alerts and Logging

We currently DO NOT have any alerts configured.

## Running and Testing

Prior to cloning this repo, you'll need to have `20.13.1` running. An easy way to ensure you're running the correct version, as well as managing Node versions is using something called [Node Version Manager](https://github.com/nvm-sh/nvm).

Follow the directions [here](https://github.com/nvm-sh/nvm) to install nvm. Below is a snippet.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Once nvm is installed, install the specific version (v20.13.1) we use for this project.

```bash
nvm install 20.13.1
```

Then you can select which version by using the following command.

```bash
nvm use 20.13.1
```

Before we download the project to local machine, let's talk about what is SSH, and why it's a recommended way to communicate between local Git and Github Server

<details>
<summary>Toggle this for the Summary!</summary>

```
SSH (Secure Shell) is a cryptographic network protocol that allows secure communication between two computers over an unsecured network. It provides strong encryption and authentication mechanisms, ensuring that data transmitted between the client and server remains confidential and secure from eavesdropping or tampering.

To establish a secure connection using SSH, a client initiates a connection request to a remote server. The server responds by authenticating the client's identity using cryptographic keys. Once authenticated, an encrypted tunnel is established through which data can be exchanged securely between the client and server. This encrypted tunnel prevents unauthorized access to the data being transmitted.

SSH is commonly used for various purposes, including remote login, remote command execution, and secure file transfer. It's widely utilized by system administrators, developers, and anyone who needs to access or manage remote systems securely over the internet.
```

</details>

For instructions on how to add SSH key to your Github Account, please visit: [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

Now that you have your SSH generated and added to your Github account, you can clone the repo, install dependencies, and run the application locally.

```bash
# if using SSH
git clone git@github.com:Venera-AI/venera-landing-page.git

node -v  #ensure this outputs 20.13.1

npm i #installs dependencies

npm run dev #serves the application on http://localhost:4321/ with hot-reloading
```

You can now navigate to `http://localhost:4321/` in your browser to view the login page.

### Feature Work

When working on a ticket, please do the following:

- Pull the latest `master`.
- Branch off `master` with the ticket in the branch name e.g. `git checkout -b landing_123_readme_update`.
- Implement your feature and commit your work. **Please utilize [gitmoji](https://github.com/carloscuesta/gitmoji) for your commits as it makes the history a bit more pleasant to look at.**
- When you first push your branch to the repo, [please open a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) and attach the `WIP` label to it.
- When you're finished with your work, please assign someone as the `Reviewer`, preferably a `CODEOWNER`. Also please change the label from `WIP` to `Ready for review`
- Implement feedback if there is any and merge your branch to `master`. Your feature branch will be deleted automatically. In addition, it will trigger a build and deploy task that will deploy the website live in a few minutes.

## Service Maintainers

If you have any questions regarding this service, please reach out to:

- Binh Trinh ([Github](https://github.com/kyle-trinh), [Slack](https://veneraai.slack.com/team/U0720022NJZ))
