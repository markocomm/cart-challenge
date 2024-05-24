# Product Cart Challenge

[Discord Server](https://discord.gg/UmYGKbntvt)

This weeks challenge (24/05/2024) is a simple one.

We have 2 classes and an enum. One is used for creating an object, other other is for interacting with a cart.
We also have an enum to make sure we have some unique way to identify different products.

This challenge has bugs, bad code practices and lacks any tests. Make sure to run eslint to find some issues.

## Current Bugs
- When creating a product, there seems to be an issue with the name and code
- When removing a product from the cart, it always shows it was successfully  removed even if the item wasn't in the cart to begin with
- When I add a new product to the cart, I can add the same product multiple times
- When I go to get a product by name, it will only get ones that are 1-1 matching, not ones that might start with the same 2 or 3 letters
- When I try to get products by category I never get for any categories

## Rules
- No using ChatGPT, don't worry, we'll know if you did :)
- Work solo, try not to help eachother out unless absolutely neccessary
- Don't put your solution in the Discord, only here
- You can change the parameter and return types if you wish

## How to take part
1. First steps add your [SSH Key to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh), this will make this a lot easier
2. Fork the repository
3. Using `git clone` on you fork of the repository
4. Make sure to create your own branch (`git checkout -b branchName`) with your username and the word solution, such as `git checkout -b ethans-solution`
5. Write your code, add some tests, even add some comments to your code to explain what you're doing if you'd like
6. Now push your changes up, via `git push -u origin master` this will push to master and set your upstream. You will see a link in your terminal, this will allow you to create a Pull Request.
7. Then wait for review :)

### Winner Criteria
The winner will be chosen based of these criteria during the challenges

- The cleanest code
- Test written for each bug and/or improvement, see the [Vitest Docs](https://vitest.dev/guide/)
- Made use of good practices and more advanced concepts

### Final Steps
The winner of each challenge will be 7 days after the challenge announcement

The person who wins the weekly challenge, gains the `Challenge Winner` role in the Discord for the next 7 days.
