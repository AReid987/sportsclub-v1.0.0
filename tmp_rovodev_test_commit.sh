#!/bin/bash
echo "Testing commit process..."
echo "test commit" > tmp_rovodev_test.txt
git add tmp_rovodev_test.txt
echo "Running git commit with lefthook + czg..."
git commit -m "test: verify complete lefthook czg setup works"
echo "Cleaning up test file..."
rm -f tmp_rovodev_test.txt
echo "Test complete!"