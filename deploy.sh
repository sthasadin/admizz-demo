echo "Kill all the AdmizzWeb PM2 actions"
sudo pm2 stop AdmizzWeb
echo "Jump to app folder"
cd /AdmizzWeb
echo "Update app from Git"
git pull origin master
echo "Yarn and build"
rm -rf node_modules yarn.lock
yarn
yarn build
echo "Run new PM2 action"
pm2 restart AdmizzWeb
echo "node version"
node --version
