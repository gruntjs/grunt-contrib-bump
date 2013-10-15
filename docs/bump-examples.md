# Usage examples

```bash
grunt bump:major        # bump major version, eg. 1.0.2 -> 2.0.0
grunt bump:minor        # bump minor version, eg. 0.1.3 -> 0.2.0
grunt bump:patch        # bump minor version, eg. 0.0.1 -> 0.0.2

# If the current version is already a prerelease version, this will work.
grunt bump:prerelease   # bump prerelease version, eg. 0.0.1-9 -> 0.0.1-10

# But if it isn't you'll run into an improperly bumped version.
grunt bump:prerelease   # bump prerelease version, eg. 1.0.2 -> 1.0.2-0
grunt bump:prerelease   # bump prerelease version, eg. 0.1.3 -> 0.1.3-0
grunt bump:prerelease   # bump prerelease version, eg. 0.0.1 -> 0.0.1-0

# Because prerelease has no idea if you're going from 0.0.1 to 0.0.2-0
# or 0.1.0-0 or 1.0.0-0, you need to use it in conjunction with one of
# the other three semver increment modes. You can specify any number of
# :-separated modes.
grunt bump:major:prerelease   # eg. 1.0.2 -> 2.0.0-0
grunt bump:minor:prerelease   # eg. 0.1.3 -> 0.2.0-0
grunt bump:patch:prerelease   # eg. 0.0.1 -> 0.0.2-0

# You can also use abbreviations, as long as they aren't ambiguous
grunt bump:ma:pr   # still works, eg. 1.0.2 -> 2.0.0-0
grunt bump:mi:pr   # still works, eg. 0.1.3 -> 0.2.0-0
grunt bump:pa:pr   # still works, eg. 0.0.1 -> 0.0.2-0
```
