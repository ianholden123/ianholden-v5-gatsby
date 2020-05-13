#!/bin/bash
# Build our Gatsby projec and upload the final files to S3

# Build our static site
gatsby build

# Backup our current site bucket to a backup bucket
aws s3 sync s3://ianholden.co.uk s3://ianholden.co.uk-backup --profile ianholdenWebsiteCli

# Empty the current site bucket
aws s3 rm s3://ianholden.co.uk --recursive --profile ianholdenWebsiteCli

# Upload our new site files to the current site bucket
aws s3 cp public/ s3://ianholden.co.uk --recursive --profile ianholdenWebsiteCli
