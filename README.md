# Outcome

# Wireframe

This app consists primarily of two pages from an HTML standpoint:
1. "Hunter" -- which displays trios of unique Pokemon-buttons from which the user selects one to catch;
2. "Inventory" -- which summarizes how many times each Pokemon has been a-seen and b-caught, once 10 capturing sessions have occurred;

### Necessary data storage tools
- Hunter data array, e.g. Pokemon name, id and picture;
- Inventtory data array, e.g. Pokemon id, seen, and caught;

# New Approach: Workflow-Based:

1. Build up basic HTML for "Hunter" page: hard code a div with image buttons to test presentation, including instructions;
2. TDD the a renderPokemon function to pull data from the Hunter array and populate the div with 3 unique Pokemon chosen at random;

