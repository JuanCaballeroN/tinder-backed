const express = require('express');
const server = express();
const port = 3000;

const Routes = require('./routes');
server.use(express.json());

server.use('/api/v1/users', Routes.UserRoutes);
server.use('/api/v1/company', Routes.CompanyRoutes);
server.use('/api/v1/skills', Routes.SkillRoutes);
server.use('/api/v1/contracts', Routes.ContractRoutes);
server.use('/api/v1/pays', Routes.PayRoutes);
server.use('/api/v1/userskills', Routes.UserSkillRoutes);


server.listen(port, () => {
    console.log(`API escuchando en puerto: ${port}`);
});