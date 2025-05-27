"use client";

import { aiConverse } from "@/api-services/ai-service";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { IConversation, IResume } from "@/type";
import {
  ArrowRightCircleIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import {
  addToast,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import { useCallback, useMemo, useState } from "react";
import GeneratedResumeData from "./GeneratedResumeData";

const AiChatButton = () => {
  const { resume, setResume } = useResumeStore();
  const [loading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [message, setMessage] = useState("");

  const converseWithAi = useCallback(
    async (resendIndex?: number) => {
      try {
        if (resendIndex != null) {
          setConversations((curr) => {
            curr[resendIndex] = {
              ...curr[resendIndex],
              error: undefined,
            };
            return curr;
          });
        } else {
          setConversations((curr) => [...curr, { message: message }]);
          setMessage("");
        }
        setIsLoading(true);
        const {
          assistantResponse,
          updatedUserResumeDataHtml,
          updatedUserResumeDataObject,
        } = await aiConverse({
          message,
          resume,
          conversationHistory: conversations,
        });

        setConversations((curr) => [
          ...curr,
          {
            updatedUserResumeDataObject: updatedUserResumeDataObject || null,
            updatedUserResumeDataHtml: updatedUserResumeDataHtml || null,
            message: String(assistantResponse),
            bot: true,
            actionTaken: false,
          },
        ]);
      } catch {
        setConversations((curr) => {
          curr[curr.length - 1] = { ...curr[curr.length - 1], error: true };
          return curr;
        });
        addToast({
          color: "danger",
          title: "Error",
          description: "Something went wrong... Please try again",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [conversations, message, resume]
  );

  const applyChanges = useCallback(
    (index: number, updatedResumeData?: IResume | null) => {
      if (!updatedResumeData) return;
      setConversations((curr) => {
        curr[index] = { ...curr[index], actionTaken: true };
        return curr;
      });
      setResume(updatedResumeData);
      addToast({
        title: "Changes applied",
        description: "Resume data has been updated",
      });
    },
    [setResume]
  );

  const memoizedConversations = useMemo(
    () =>
      conversations.map((conversation, idx) => (
        <div key={`chat-conversation-${idx}`} className="flex flex-col gap-2">
          <div
            className={`flex ${
              conversation.bot ? "justify-start" : "flex-row-reverse"
            }`}
          >
            <div className="space-y-1 flex-wrap break-words">
              <p
                className={`${
                  !conversation.bot
                    ? `max-w-md bordered border-gray-400 border-1 px-3 py-2 rounded-xl text-wrap ${
                        conversation.error ? "border-red-500 text-red-500" : ""
                      }`
                    : ""
                }`}
              >
                {conversation.message}
              </p>
              {conversation.error && (
                <span
                  className="text-xs flex justify-end cursor-pointer"
                  onClick={() => converseWithAi(idx)}
                >
                  Resend
                </span>
              )}
            </div>
          </div>

          {!!conversation.updatedUserResumeDataObject && (
            <>
              <GeneratedResumeData
                generatedResumeData={conversation.updatedUserResumeDataObject}
                removeNullFields={true}
              />
              {!conversation.actionTaken && (
                <span>
                  <Button
                    variant="ghost"
                    onPress={() =>
                      applyChanges(
                        idx,
                        conversation.updatedUserResumeDataObject
                      )
                    }
                  >
                    Apply changes
                  </Button>
                </span>
              )}
            </>
          )}
        </div>
      )),
    [conversations, applyChanges, converseWithAi]
  );

  return (
    <div className="fixed bottom-8 right-8">
      <Button
        variant="shadow"
        onPress={onOpen}
        color="primary"
        className="rounded-lg group"
        startContent={<ChatBubbleLeftIcon height={20} />}
      >
        <p className="group-hover:flex hidden transition-all duration-700 ease-linear animate-appearance-in">
          Chat
        </p>
      </Button>

      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <DrawerContent className="pt-12">
          {() => (
            <>
              <DrawerBody>
                {!conversations.length ? (
                  <div className="flex w-full h-full justify-center items-center">
                    <p className="text-center m-auto text-2xl">{`Hey there! I'm your resume assistant, here to guide you
                    through your journey. Let me know how I can assist!`}</p>
                  </div>
                ) : (
                  memoizedConversations
                )}
              </DrawerBody>
              <DrawerFooter className="flex flex-row items-end justify-center">
                <div className="relative w-full">
                  <Textarea
                    placeholder="Type something..."
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />

                  {!!message && (
                    <Button
                      onPress={() => converseWithAi()}
                      isLoading={loading}
                      disabled={!message}
                      variant="flat"
                      color="primary"
                      className="absolute right-2 bottom-2 bg-gray-300"
                      isIconOnly
                    >
                      <ArrowRightCircleIcon
                        height={30}
                        className="text-primary"
                      />
                    </Button>
                  )}
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AiChatButton;
