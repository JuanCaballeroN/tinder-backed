const express = require('express');
const router = express.Router();
const SkillController = require('../controllers/SkillController');

router.get('/',SkillController.getSkills);

router.get('/:id',SkillController.getSkill);

router.post('/',SkillController.insertSkill);

router.patch('/:id',SkillController.updateSkill);

router.delete('/:id',SkillController.deleteSkill);

module.exports = router;