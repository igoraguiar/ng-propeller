import { Injectable, NgZone, ApplicationRef } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class PmdAlertService {

    constructor(private zone: NgZone, private applicationRef: ApplicationRef) { }

    showAlert(
        $positionX?, $positionY?, $dataEffect?, $dataMessage?, $dataType?, $actionText?, $action?, $duration?
    ) {
        
        this.doShowAlert($positionX, $positionY, $dataEffect, $dataMessage, $dataType, $actionText, $action, $duration)
    }

    doShowAlert(
        $positionX?, $positionY?, $dataEffect?, $dataMessage?, $dataType?, $actionText?, $action?, $duration?
    ) {
        if ($action === true) {
            $action = "true"
        } else if ($action === false) {
            $action = "false"
        }
        if ($(window).width() < 768) {
            $positionX = "center";
        } else {
            $positionX = $positionX;
        }

        if (!$(".pmd-alert-container." + $positionX + "." + $positionY).length) {
            $('body').append("<div class='pmd-alert-container " + $positionX + " " + $positionY + "'></div>");
        }

        var $currentPath = $(".pmd-alert-container." + $positionX + "." + $positionY);
        let notificationValue = () => {
            if ($action == "true") {
                if ($actionText == null) {
                    $notification = "<div class='pmd-alert' data-action='true'>" + $dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close'>×</a></div>";
                } else {
                    $notification = "<div class='pmd-alert' data-action='true'>" + $dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close'>" + $actionText + "</a></div>";
                }
                return $notification;
            } else {
                if ($actionText == null) {
                    $notification = "<div class='pmd-alert' data-action='false'>" + $dataMessage + "</div>";
                } else {
                    $notification = "<div class='pmd-alert' data-action='false'>" + $dataMessage + "<a href='javascript:void(0)' class='pmd-alert-close'>" + $actionText + "</a></div>";
                }
                return $notification;
            }
        }
        var $notification = $(notificationValue());
        var boxLength = $(".pmd-alert-container." + $positionX + "." + $positionY + " .pmd-alert").length;
        var closeFn = this.closeAlert;
        $notification.children('a.pmd-alert-close').click((e)=> {
            closeFn($(e.target))
        });


        if (boxLength > 0) {
            if ($positionY == 'top') {
                $currentPath.append($notification);
            }
            else {
                $currentPath.prepend($notification);
            }
            $currentPath.width($(".pmd-alert").outerWidth());
            if ($action == "true") {
                $currentPath.children("[data-action='true']").addClass("visible" + " " + $dataEffect);
            } else {
                $currentPath.children("[data-action='false']").addClass("visible" + " " + $dataEffect).delay($duration).slideUp(
                    undefined,
                    () => {
                        $(this).removeClass("visible" + " " + $dataEffect).remove();
                    });
            }
            $currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
        } else {
            $currentPath.append($notification);
            $currentPath.width($(".pmd-alert").outerWidth());
            if ($action == "true") {
                $currentPath.children("[data-action='true']").addClass("visible" + " " + $dataEffect);
            } else {
                $currentPath.children("[data-action='false']").addClass("visible" + " " + $dataEffect).delay($duration).slideUp(
                    undefined,
                    () => {
                        $(this).removeClass("visible" + " " + $dataEffect).remove();
                    });
            }
            $currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
        }
        var $middle = $(".pmd-alert").outerWidth() / 2;
        $(".pmd-alert-container.center").css("marginLeft", "-" + $middle + "px");
    }

    closeAlert($jqCloseEl) {
        var $dataEffect = $jqCloseEl.attr("data-effect");
        $jqCloseEl.parents(".pmd-alert").slideUp(function () { $(this).removeClass("visible" + " " + $dataEffect).remove(); });
    }

}
