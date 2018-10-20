setTimeout(function() {
	var checkObj = [];
	var checkList = [];

	layui.use(['laydate', 'element', 'flow', 'form', 'laypage', 'upload'], function() {
		var table = layui.table,
			upload = layui.upload,
			$ = layui.jquery,
			element = layui.element,
			flow = layui.flow,
			form = layui.form,
			laypage = layui.laypage; //日期
		$("#addSen").click(function() {
			//window.parent.addSentence();
				layerIndex = layer.open({
						type: 1,
						shade: 0.1,
						id: "Bia6",
						anim: 0,
						btn: '确定',
						area: ['700px', "700px"],
						scrollbar: true,
						title: "添加星座",
						content: $('#tiaoxuan6'),
						success: function() {


							form.render('select')
							form.render();

						},

						yes: function(index, layero) {
							var lanmu = $("#lanmuih3").find("option:checked").attr("value");

							var sentitle = $("#sentitle").val();
							var picImg = [];
							for(var i = 0; i < $("#tiaoxuan6").find(".imgupBox .img").length; i++) {
								picImg.push($($("#tiaoxuan6").find(".imgupBox .img")[i]).find("input").val())
							}

							var checkedtab = '';
							$(".layui-more-check input:checkbox").each(function() {
								if(this.checked) {
									checkedtab = checkedtab + $(this).val() + ',';

								}

							})

							checkedtab = checkedtab.substr(0, checkedtab.length - 1);

							if($("#tomorrow2").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}
							if($("#today2").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}
							if($("#week2").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}
							if($("#month2").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}
							if($("#year2").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}

							var data = {
								type_id: lanmu, //栏目
								
								content: $("#year2").val(), //内容
								title: $("#year2").val(), //标题
								label: $("#year2").val(),//标签
								files: picImg.join(",") //图片
							}
                       console.log(data);
							$.post(addSentenceUrl, data, function(res) {
								console.log(res)
								if(res.code == 1) {
									layer.close(index);
									tableIn.reload();
									layer.msg(res.msg, {
										icon: 1,
										time: 2000
									})
								} else {
									layer.msg(res.msg, {
										icon: 2,
										time: 2000
									})
								}
							})
						},
						end: function() {
							$(".layui-more-check-new").html('');

							$(".layui-more-check-my input:checkbox").each(function() {
								$(this).prop("checked", false);
								form.render();
							})

							$("#tiaoxuan5").hide();

							checkObj = []; //关闭时清除数据
							checkList = []; //关闭时清除数据

						}
					})
		})

		$("#lanelSghe").click(function() {
			window.parent.xcxTypelist()
		})
		//添加栏目与编辑栏目
		$("body").on("click", "#FormEdit .xsDel", function() {
			var id = $(this).attr("id");
			var name = $(this).attr("name");
			var sort = $(this).attr("sort");
			var that = $(this);
			layer.open({
				type: 1,
				shade: 0.3,
				id: "Bi",
				anim: 0,
				move: false,
				btn: '确定',
				area: ['320px', "200px"],
				title: "编辑栏目",
				content: $('#editLabel'),
				success: function(layero, index) {
					$("#editLabel").find("input[name=name]").val(name)
					$("#editLabel").find("input[name=sort]").val(sort)
					$("#editForm").append('<input type="hidden" name="id" value="' + id + '" />')
				},
				yes: function(index, layero) {
					var name = $("#editLabel").find("input[name=name]").val()
					var sort = $("#editLabel").find("input[name=sort]").val()
					var data = $('#editForm').serialize();
					if(name == '') {
						layer.msg('名称不能为空', {
							icon: 2,
							time: 2
						});
						return false
					}
					$.post(editTypeyu, data, function(res) {
						console.log(res)
						if(res.code == 1) {
							layer.msg(res.msg, {
								icon: 1,
								time: 1000
							})
							layer.close(index)
							$("#labelAdd").find("#trbo_" + id).find("td:eq(0)").text(name);
							$("#labelAdd").find("#trbo_" + id).find("td:eq(1)").text(sort);
							that.attr("name", name)
							that.attr("sort", sort)
						} else {
							layer.msg(res.msg, {
								icon: 2,
								time: 1000
							})
						}
					})
				},
				end: function() {
					$("#editForm").find("input[name=id]").remove()
					$("#editLabel").hide();
				}
			})
		})
		//段子操作
		$("#tiaoxuanYong").find(".layui-form a").click(function() {
			var pan = $(this).attr("data-off");
			var id = $("#nameId").val();
			var type = $("#lanmuih1").val()
			var jin = $(this).attr("data-id");
			var filesf = sentenceData.files != 'null' ? sentenceData.files.split(",") : '';
			console.log(type)
			if(type == '' || type == 'null' || type == null) {
				layer.msg("栏目不能为空！", {
					icon: 2,
					time: 2000
				});
				return false;
			}
			var isopr = $("#tiaoxuanYong").find("input[name=tongyi]").val() == 1 ? (pan == 2 ? 2 : 1) : 2;
			layer.confirm("确定要改变其状态？", {
				icon: 3
			}, function(index) {
				$.post(senStateY, {
					is_opened: isopr,
					id: id,
					is_open: pan,
					type_id: type,
					content: sentenceData.content,
					files: filesf,
					title: sentenceData.title,
					lenth: sentenceData.lenth,
					openid: sentenceData.openid,
					nickname: sentenceData.nickname,
					avatar: sentenceData.avatar
				}, function(res) {
					if(res.code == 1) {
						layer.msg(res.msg, {
							icon: 1,
							time: 2000
						})
						layer.close(index)
						var sec = $("#Bilai1").parents(".layui-layer").attr("times")
						layer.close(sec);
						tableIn.reload();
					} else {
						layer.msg(res.msg, {
							icon: 2,
							time: 2000
						})
					}
				})
			})

		})

		//角色性别筛选
		form.on('select(roleSex)', function(data) {
			var lis = $("#roleSear").find("option:checked").attr("value")
			console.log(lis)
			$("#tiaoxuan").find("#nameSear").html("")
			$("#tiaoxuan").find("#nameSear").append('<option value="">选择或搜索</option>')
			$.post(sexSlect, {
				sex: data.value,
				role: lis
			}, function(res) {
				console.log(res)
				res = eval('(' + res + ')')
				console.log(res)
				if(res.code == 1) {
					if(res.data) {
						for(var i in res.data) {
							var obj = res.data[i];
							var add = '<option data-ava="' + obj.avatar + '" data-name="' + obj.nickname + '"  value="' + obj.id + '">' + obj.nickname + '</option>'
							$("#tiaoxuan").find("#nameSear").append(add)
							form.render('select')
						}
					}
				}
			})
			form.render('select')
		});
		//角色筛选
		form.on('select(roleList)', function(data) {
			var lis = $("#sexSear").find("option:checked").attr("value")
			console.log(lis)
			$("#tiaoxuan").find("#nameSear").html("")
			$("#tiaoxuan").find("#nameSear").append('<option value="">选择或搜索</option>')
			$.post(sexSlect, {
				role: data.value,
				sex: lis
			}, function(res) {
				console.log(res)
				res = eval('(' + res + ')')
				console.log(res)
				if(res.code == 1) {
					if(res.data) {
						for(var i in res.data) {
							var obj = res.data[i];
							var add = '<option data-ava="' + obj.avatar + '" data-name="' + obj.nickname + '"  value="' + obj.id + '">' + obj.nickname + '</option>'
							$("#tiaoxuan").find("#nameSear").append(add)
							form.render('select')
						}
					}
				} else {
					$("#tiaoxuan").find("#nameSear").html("")
				}
			})
			form.render('select')
		});
		//角色名称筛选
		form.on('select(roleName)', function(data) {
			console.log($("#nameSear").find("option:checked").attr("data-name"))
		});
		var sentenceData = {};

		table.on('tool(list)', function(obj) {
			var data = obj.data;
			// console.log(data)
			if(obj.event === 'onoff') {
				console.log(data)
				if(obj.data.is_open == 1) {
					layer.confirm('确定要将此数据停止使用?', {
						icon: 3
					}, function(index) {
						$.post(senStateY, {
							id: obj.data.id,
							is_open: 3
						}, function(res) {
							console.log(res)
							if(res.code == 1) {
								layer.msg(res.msg, {
									icon: 1,
									time: 2000
								})
								layer.close(index)
								tableIn.reload();
							} else {
								layer.msg(res.msg, {
									icon: 2,
									time: 2000
								})
							}
						})
					})
				} else if(obj.data.is_open == 3) {
					layer.confirm('确定要将此数据转为已通过', {
						icon: 3
					}, function(index) {
						$.post(senStateY, {
							id: obj.data.id,
							is_open: 1,
							is_opened: 3
						}, function(res) {
							if(res.code == 1) {
								layer.msg(res.msg, {
									icon: 1,
									time: 2000
								})
								layer.close(index)
								tableIn.reload();
							} else {
								layer.msg(res.msg, {
									icon: 2,
									time: 2000
								})
							}
						})
					})
				} else if(obj.data.is_open == 0) {
					console.log(obj.data)
					layer.open({
						type: 1,
						shade: 0.3,
						id: "Bilai1",
						anim: 0,
						area: ['300px', "240px"],
						title: "控制操作",
						content: $('#tiaoxuanYong'),
						success: function() {
							$("#Bilai1").css('cssText', "overflow: initial;")
							$('#nameId').val(obj.data.id)
							sentenceData = obj.data;
							$("#layui-btn-xs").find("select").val(obj.data.type_id)
							form.render("select")
						},
						yes: function(index) {},
						end: function() {
							$("#tiaoxuanYong").hide();
						}
					})
				} else if(obj.data.is_open == 2) {
					layer.open({
						type: 1,
						shade: 0.3,
						id: "Bilai1",
						anim: 0,
						area: ['300px', "240px"],
						title: "控制操作",
						content: $('#tiaoxuanYong'),
						success: function() {
							$("#Bilai1").css('cssText', "overflow: initial;")
							$('#nameId').val(obj.data.id)
							sentenceData = obj.data;
							$("#tiaoxuanYong").find("select").val(obj.data.type_id)
							$("#tiaoxuanYong").find(".layui-btn-danger").hide();
							form.render("select")
						},
						yes: function(index) {},
						end: function() {
							$("#tiaoxuanYong").find(".layui-btn-danger").show();
							$("#tiaoxuanYong").hide();
						}
					})
				}

			} else if(obj.event === 'lookpic') {
				var ind = $(this).attr("data-id")
				if(obj.data.files != "null") {
					var file = obj.data.files.split(",");
					var ad = [];
					var add = '';
					for(var i in file) {
						ad.push({
							src: "http://img.qqzzxx.com/" + file[i]
						})
					}
					var data = {
						"start": ind,
						data: ad
					}
					layer.photos({
						photos: data,
						anim: 5
					});
				}
			}else if(obj.event === 'update'){
				$.post(addSentenceUrl, data, function(res) {
								console.log(res)
								if(res.code == 1) {
									layer.close(index);
									tableIn.reload();
									layer.msg(res.msg, {
										icon: 1,
										time: 2000
									})
								} else {
									layer.msg(res.msg, {
										icon: 2,
										time: 2000
									})
								}
							})
			} else if(obj.event === 'senEdit') {
				console.log(6666);
				console.log(8888);
				
					var id = obj.data.id;
					var admin_id = obj.data.admin_id;
					layerIndex = layer.open({
						type: 1,
						shade: 0.1,
						id: "Bia6",
						anim: 0,
						btn: '确定',
						area: ['700px', "700px"],
						scrollbar: true,
						title: "星座编辑",
						content: $('#tiaoxuan6'),
						success: function() {
							console.log(obj.data);
							/*-------今天-------*/
							$("#summary_star").val(obj.data.today.summary_star);
							$("#love_star").val(obj.data.today.love_star);
							$("#money_star").val(obj.data.today.money_star);
							$("#work_star").val(obj.data.today.work_star);
							$("#grxz").val(obj.data.today.grxz);
							$("#lucky_num").val(obj.data.today.lucky_num);
//							$("#date").val(obj.data.today.lucky_time);
							$("#lucky_direction").val(obj.data.today.lucky_direction);
							$("#day_notice").val(obj.data.today.day_notice);
							$("#general_txt").val(obj.data.today.general_txt);
							$("#love_txt").val(obj.data.today.love_txt);
							$("#work_txt").val(obj.data.today.work_txt);
							$("#money_txt").val(obj.data.today.money_txt);
//							$("#date1").val(obj.data.today.time);
							$("#lucky_color").val(obj.data.today.lucky_color);
							/*-------明天--------*/
							console.log(obj.data.tomorrow.summary_star);
							$("#summary_star1").val(obj.data.tomorrow.summary_star);
							$("#love_star1").val(obj.data.tomorrow.love_star);
							$("#money_star1").val(obj.data.tomorrow.money_star);
							$("#work_star1").val(obj.data.tomorrow.work_star);
							$("#grxz1").val(obj.data.tomorrow.grxz);
							$("#lucky_num1").val(obj.data.tomorrow.lucky_num);
							//$("#date3").val(obj.data.tomorrow.lucky_time);
							$("#lucky_direction1").val(obj.data.tomorrow.lucky_direction);
							$("#day_notice1").val(obj.data.tomorrow.day_notice);
							$("#general_txt1").val(obj.data.tomorrow.general_txt);
							$("#love_txt1").val(obj.data.tomorrow.love_txt);
							$("#work_txt1").val(obj.data.tomorrow.work_txt);
							$("#money_txt1").val(obj.data.tomorrow.money_txt);
							//$("#date4").val(obj.data.tomorrow.time);
							$("#lucky_color1").val(obj.data.tomorrow.lucky_color);
							/*--------本周--------*/
							$("#summary_star2").val(obj.data.week.summary_star);
							$("#love_star2").val(obj.data.week.love_star);
							$("#money_star2").val(obj.data.week.money_star);
							$("#work_star2").val(obj.data.week.work_star);
							$("#grxz2").val(obj.data.week.grxz);
							$("#lucky_num2").val(obj.data.week.lucky_num);
							//$("#date5").val(obj.data.week.lucky_time);
							$("#lucky_direction2").val(obj.data.week.lucky_direction);
							$("#day_notice2").val(obj.data.week.day_notice);
							$("#general_txt2").val(obj.data.week.general_txt);
							$("#love_txt2").val(obj.data.week.love_txt);
							$("#work_txt2").val(obj.data.week.work_txt);
							$("#money_txt2").val(obj.data.week.money_txt);
							//$("#date6").val(obj.data.week.time);
							$("#lucky_color2").val(obj.data.week.lucky_color);
							/*--------本月--------*/
							$("#summary_star3").val(obj.data.month.summary_star);
							$("#love_star3").val(obj.data.month.love_star);
							$("#money_star3").val(obj.data.month.money_star);
							$("#work_star3").val(obj.data.month.work_star);
							$("#grxz3").val(obj.data.month.grxz);
							$("#lucky_num3").val(obj.data.month.lucky_num);
							//$("#date7").val(obj.data.month.lucky_time);
							$("#lucky_direction3").val(obj.data.month.lucky_direction);
							$("#day_notice3").val(obj.data.month.day_notice);
							$("#general_txt3").val(obj.data.month.general_txt);
							$("#love_txt3").val(obj.data.month.love_txt);
							$("#work_txt3").val(obj.data.month.work_txt);
							$("#money_txt3").val(obj.data.month.money_txt);
							//$("#date8").val(obj.data.month.time);
							$("#lucky_color3").val(obj.data.month.lucky_color);
							/*--------本年--------*/
							$("#summary_star4").val(obj.data.year.summary_star);
							$("#love_star4").val(obj.data.year.love_star);
							$("#money_star4").val(obj.data.year.money_star);
							$("#work_star4").val(obj.data.year.work_star);
							$("#grxz4").val(obj.data.year.grxz);
							$("#lucky_num4").val(obj.data.year.lucky_num);
							//$("#date9").val(obj.data.year.lucky_time);
							$("#lucky_direction4").val(obj.data.year.lucky_direction);
							$("#day_notice4").val(obj.data.year.day_notice);
							$("#general_txt4").val(obj.data.year.general_txt);
							$("#love_txt4").val(obj.data.year.love_txt);
							$("#work_txt4").val(obj.data.year.work_txt);
							$("#money_txt4").val(obj.data.year.money_txt);
							//$("#date10").val(obj.data.year.time);
							$("#lucky_color4").val(obj.data.year.lucky_color);

							form.render('select')
							form.render();

						},

						yes: function(index, layero) {
							var lanmu = $("#lanmuih2").find("option:checked").attr("value");

							var sentitle = $("#sentitle").val();
							var picImg = [];
							for(var i = 0; i < $("#tiaoxuan5").find(".imgupBox .img").length; i++) {
								picImg.push($($("#tiaoxuan5").find(".imgupBox .img")[i]).find("input").val())
							}

							var checkedtab = '';
							$(".layui-more-check input:checkbox").each(function() {
								if(this.checked) {
									checkedtab = checkedtab + $(this).val() + ',';

								}

							})

							checkedtab = checkedtab.substr(0, checkedtab.length - 1);

							if($("#summary_star").val() == ''||$("#love_star").val() == ''||$("#money_star").val() == ''||$("#work_star").val() == ''||$("#grxz").val() == ''||$("#lucky_num").val() == ''||$("#date").val() == ''||$("#lucky_direction").val() == ''||$("#day_notice").val() == ''||$("#general_txt").val() == ''||$("#love_txt").val() == ''||$("#work_txt").val() == ''||$("#money_txt").val() == ''||$("#date1").val() == ''||$("#lucky_color").val() == '') {
								layer.msg("内容不能为空！！！", {
									icon: 2,
									time: 1000
								});
								return false;
							}
							

							var data = {
								type_id: lanmu, //栏目
								id: id,
								content: $("#commentCon1").val(), //内容
								title: sentitle, //标题
								label: checkedtab, //标签
								files: picImg.join(",") //图片
							}

							$.post(editStar, data, function(res) {
								console.log(res)
								if(res.code == 1) {
									layer.close(index);
									tableIn.reload();
									layer.msg(res.msg, {
										icon: 1,
										time: 2000
									})
								} else {
									layer.msg(res.msg, {
										icon: 2,
										time: 2000
									})
								}
							})
						},
						end: function() {
							$(".layui-more-check-new").html('');

							$(".layui-more-check-my input:checkbox").each(function() {
								$(this).prop("checked", false);
								form.render();
							})

							$("#tiaoxuan5").hide();

							checkObj = []; //关闭时清除数据
							checkList = []; //关闭时清除数据

						}
					})
				
			}

		});

		form.on('checkbox(zhiding)', function(data) {
			console.log(data)
			var tilr = '确定要推荐此条数据?';
			if(data.value == 1) {
				tilr = '确定要将此条数据取消推荐?';
			}
			var id = $(this).attr("data-id");
			var openi = $(this).attr("data-openid");
			var avat = $(this).attr("data-avatar");
			var nick = $(this).attr("data-nickname")
			layer.confirm(tilr, {
				icon: 3
			}, function(index) {
				$.post(zhidingUrl, {
					id: id,
					openid: openi,
					avatar: avat,
					nickname: nick
				}, function(res) {
					console.log(res)
					if(res.code == 1) {
						layer.msg(res.msg, {
							icon: 1,
							time: 1000
						})
						tableIn.reload();
						layer.close(index)
					} else {
						if(data.value == 1) {
							data.elem.checked = true;
						} else {
							data.elem.checked = false;
						}
						form.render()
						layer.msg(res.msg, {
							icon: 2,
							time: 1000
						})
					}
				})
			}, function() {
				if(data.value == 1) {
					data.elem.checked = true;
				} else {
					data.elem.checked = false;
				}
				form.render()
			})
		});
		form.on('checkbox(jingxuan)', function(data) {
			console.log(data)
			var tilr = '确定要将此条数据精选?';
			if(data.value == 1) {
				tilr = '确定要将此条数据取消精选?';
			}
			var id = $(this).attr("data-id");
			var openi = $(this).attr("data-openid");
			var avat = $(this).attr("data-avatar");
			var nick = $(this).attr("data-nickname");
			layer.confirm(tilr, {
				icon: 3
			}, function(index) {
				$.post(jingxuanUrl, {
					id: id,
					openid: openi,
					avatar: avat,
					nickname: nick
				}, function(res) {
					console.log(res)
					if(res.code == 1) {
						layer.msg(res.msg, {
							icon: 1,
							time: 1000
						})
						layer.close(index)
						tableIn.reload();
					} else {
						layer.msg(res.msg, {
							icon: 2,
							time: 1000
						})
						if(data.value == 1) {
							data.elem.checked = true;
						} else {
							data.elem.checked = false;
						}
						form.render()
					}
				})
			}, function() {
				if(data.value == 1) {
					data.elem.checked = true;
				} else {
					data.elem.checked = false;
				}
				form.render()
			})
		});
		$('body').on('blur', '.list_order', function() {
			var id = $(this).attr('data-id');
			var look = $(this).val();
			var loading = layer.load(1, {
				shade: [0.1, '#fff']
			});
			$.post('{:url("adOrder")}', {
				id: id,
				sort: sort
			}, function(res) {
				layer.close(loading);
				if(res.code === 1) {
					layer.msg(res.msg, {
						time: 1000,
						icon: 1
					});
					tableIn.reload();
				} else {
					layer.msg(res.msg, {
						time: 1000,
						icon: 2
					});
				}
			})
		});
		$('body').on('blur', '.list_look', function() {
			var id = $(this).attr('data-id');
			var look = $(this).val();
			var loading = layer.load(1, {
				shade: [0.1, '#fff']
			});
			$.post('{:url("adLook")}', {
				id: id,
				look: look
			}, function(res) {
				layer.close(loading);
				if(res.code === 1) {
					layer.msg(res.msg, {
						time: 1000,
						icon: 1
					});
					tableIn.reload();
				} else {
					layer.msg(res.msg, {
						time: 1000,
						icon: 2
					});
				}
			})
		});
		$("body").on('click', '#delPage', function() {
			layer.confirm('确认要删除选中的数据吗？', {
				icon: 3
			}, function(index) {
				var checkStatus = table.checkStatus('ad'); //test即为参数id设定的值
				var ids = [],
					senId = [];
				$(checkStatus.data).each(function(i, o) {
					ids.push(o.id);
					senId.push(o.sentence_id)
				});
				var loading = layer.load(1, {
					shade: [0.1, '#fff']
				});
				console.log(senId)
				$.post(delsen, {
					sentence_ids: senId,
					ids: ids
				}, function(data) {
					layer.close(loading);
					if(data.code === 1) {
						layer.close(index);

						layer.msg(data.msg, {
							time: 1000,
							icon: 1
						});
						tableIn.reload();
					} else {
						layer.msg(data.msg, {
							time: 1000,
							icon: 2
						});
					}
				});
			});
		})
	})

}, 1000)