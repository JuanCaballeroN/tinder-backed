const express = require('express');
const router = express.Router();
const UserSkillController = require('../controllers/UserSkillController');

router.get('/',UserSkillController.getUserSkills);

router.get('/:id',UserSkillController.getUserSkill);

router.post('/',UserSkillController.insertUserSkill);

router.patch('/:id',UserSkillController.updateUserSkill);

router.delete('/:id',UserSkillController.deleteUserSkill);

module.exports = router;